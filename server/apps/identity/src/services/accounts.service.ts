import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { FindManyOptions, ILike, In } from 'typeorm';

import { 
  AccountUsersSearchFilter, 
  Claim, 
  CreateUserDto, 
  GetUserRequest, 
  IPageable, 
  LockoutUserRequest, 
  Page, 
  RegistrationDto, 
  ResponseMessage, 
  ResponseStatus, 
  Role, 
  RoleTypes, 
  Tenant, 
  UpdateUserDto, 
  User, 
  UserDto, 
  UserMapper} from '@vsp/common';

import { LoggerService } from '@vsp/logger';

import { IAccountsService } from '../interfaces/accounts-service.interface';
import { IClaimsRepository, CLAIMS_REPOSITORY_TOKEN } from '../interfaces/claims-repository.interface';
import { IRolesRepository, ROLES_REPOSITORY_TOKEN } from '../interfaces/roles-repository.interface';
import { ITenantsRepository, TENANTS_REPOSITORY_TOKEN } from '../interfaces/tenants-repository.interface';
import { IUsersRepository, USERS_REPOSITORY_TOKEN } from '../interfaces/users-repository.interface';

@Injectable()
export class AccountsService implements IAccountsService {
  @Inject(USERS_REPOSITORY_TOKEN)
  private readonly _usersRepository: IUsersRepository;

  @Inject(TENANTS_REPOSITORY_TOKEN)
  private readonly _tenantsRepository: ITenantsRepository;

  @Inject(ROLES_REPOSITORY_TOKEN)
  private readonly _rolesRepository: IRolesRepository;

  @Inject(CLAIMS_REPOSITORY_TOKEN)
  private readonly _claimsRepository: IClaimsRepository;
  
  
  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(AccountsService.name);
  }


  public async register(registration: RegistrationDto): Promise<UserDto | null> {
    // Get roles for account owner's user
    const accountOwnerRoles: Role[] = await this._rolesRepository
      .findWithRelations({ where: [{ name: In([RoleTypes.ADMIN, RoleTypes.USER]) }]});

    // Get claims for account owner's user 
    // - This is all claims that are flagged as isSetByTenant
    const accountOwnClaims: Claim[] = await this._claimsRepository
      .findAll({ where: [{ isSetByTenant: true }]});

    // Create new User from registration
    const user: User = await this._usersRepository.save(
      this._createUserEntityFromRegistration(registration, accountOwnerRoles, accountOwnClaims)
    );

    return UserMapper.toDto(user);
  }


  public async searchUsers(filter: AccountUsersSearchFilter, pageable: IPageable): Promise<Page<UserDto>> {
    const options: FindManyOptions<User> = filter?.query?.trim()?.length
      ? { 
        relations: ['tenant', 'tenant.account', 'profile'],
        where: [
          { profile: { firstName: ILike(`%${filter.query.trim()}%`) }, tenantId: filter.tenantId },
          { profile: { lastName: ILike(`%${filter.query.trim()}%`) }, tenantId: filter.tenantId },
          { username: ILike(`%${filter.query.trim()}%`), tenantId: filter.tenantId },
        ] }
      : { 
        relations: ['tenant', 'tenant.account', 'profile'],
        where: [{ tenantId: filter.tenantId }] 
      };
    
    const [users, count] = await this._usersRepository.findByPageable(pageable, options);
    
    return new Page<UserDto>(UserMapper.toDtoList(users), count, pageable);
  }


  public async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    // Get roles for admin site
    const adminSiteRoles: Role[] = await this._rolesRepository
      .findWithRelations({ where: [{ name: In([RoleTypes.ADMIN, RoleTypes.USER]) }]});

    const existingUser: User | null = await this._usersRepository.findByCondition({
      where: [
        { email: createUserDto.email }, 
        { username: createUserDto.username 
      }]
    });

    if (existingUser) {
      throw new RpcException(
        new BadRequestException("User already exists with that username or email!")
      )
    }

    const savedUser: User = await this._usersRepository.save(
      this._usersRepository.create({
        ...createUserDto,
        roles: adminSiteRoles
      })
    );

    return UserMapper.toDto(savedUser);
  }


  public async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
    const existingUser: User | null = await this._usersRepository.findByCondition({
      relations: ['profile', 'profile.address'],
      where: { id: userId }
    });

    if (!existingUser) {
      throw new RpcException(
        new BadRequestException("User does not exist with!")
      )
    }

    await this._usersRepository.save(
      this._patchValuesToExistingUser(existingUser, updateUserDto)
    );

    return UserMapper.toDto(existingUser);
  }


  public async lockoutUser(userId: string, lockoutUserRequest: LockoutUserRequest): Promise<ResponseMessage<void>> {
    const existingUser: User | null = await this._usersRepository
      .findByCondition({
        relations: ['refreshTokens'],
        where: [{ id: userId, tenantId: lockoutUserRequest.tenantId }]
      });

    if (!existingUser) {
      throw new RpcException(
        new NotFoundException('User was not found!')
      );
    }

    existingUser.isLockedOut = lockoutUserRequest.isLockedOut;

    // If user is being locked out, blacklist their refresh tokens as well.
    if (lockoutUserRequest.isLockedOut) {
      existingUser.refreshTokens?.forEach(token => token.isBlacklisted = true);
    }

    await this._usersRepository.save(existingUser);

    return new ResponseMessage<void>({
      status: ResponseStatus.SUCCESS,
      message: `Successfully updated the users lockout status`,
      payload: null
    });
  }


  public async getUserById(userId: string, getUserRequest: GetUserRequest): Promise<UserDto> {
    const user: User | null = await this._usersRepository.findByCondition({
      relations: ['profile', 'profile.address', 'claims', 'roles'],
      where: [{ id: userId, tenantId: getUserRequest.tenantId }]
    });

    if (!user) {
      throw new RpcException(
        new NotFoundException('User was not found!')
      );
    }

    return UserMapper.toDto(user);
  }


  // @TODO There should be a clean way of doing this.
  // @Note Using spread operator cause inserts rather than updates and BeforeUpdate never fires.
  //       Might consider moving this to UserMapper. patchToEntity(entity:  Entity, dto: Updatedto): Entity
  private _patchValuesToExistingUser(existingUser: User, updateUserDto: UpdateUserDto): User {
    // Claims
    existingUser.claims = updateUserDto.claims.map(c => ({...c} as Claim));
    
    // Profile
    existingUser.profile.avatarUrl = updateUserDto.profile.avatarUrl;
    existingUser.profile.firstName = updateUserDto.profile.firstName;
    existingUser.profile.lastName = updateUserDto.profile.lastName;
    existingUser.profile.summary = updateUserDto.profile.summary;

    // Address
    if (existingUser?.profile?.address) {
      existingUser.profile.address.city = updateUserDto.profile.address.city;
      existingUser.profile.address.country = updateUserDto.profile.address.country;
      existingUser.profile.address.state = updateUserDto.profile.address.state;
      existingUser.profile.address.street = updateUserDto.profile.address.street;
      existingUser.profile.address.street2 = updateUserDto.profile.address.street2;
      existingUser.profile.address.zip = updateUserDto.profile.address.zip;
    }
    
    return existingUser;
  }


  private _createUserEntityFromRegistration(registration: RegistrationDto, roles: Role[], claims: Claim[]): User {
    return this._usersRepository.create({
      ...registration.user,
      username: registration?.user?.username?.trim()?.toLowerCase(),
      email: registration?.user?.email?.trim().toLowerCase(),
      roles: roles,
      claims: claims,
      profile: {
        ...registration?.user?.profile,
        address: {
          ...registration?.user?.profile?.address
        }
      },
      tenant: {
        account: {
          ...registration?.account
        }
      } as Tenant
    })
  }
}
