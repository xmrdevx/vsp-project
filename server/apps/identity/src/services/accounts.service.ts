import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { FindManyOptions, ILike, In } from 'typeorm';

import { AccountUsersSearchFilter, Claim, CreateUserDto, IPageable, Page, RegistrationDto, Role, RoleTypes, Tenant, UpdateUserDto, User, UserDto } from '@vsp/common';
import { LoggerService } from '@vsp/logger';

import { IAccountsService } from '../interfaces/accounts-service.interface';
import { IClaimsRepository, CLAIMS_REPOSITORY_TOKEN } from '../interfaces/claims-repository.interface';
import { IRolesRepository, ROLES_REPOSITORY_TOKEN } from '../interfaces/roles-repository.interface';
import { ITenantsRepository, TENANTS_REPOSITORY_TOKEN } from '../interfaces/tenants-repository.interface';
import { IUsersRepository, USERS_REPOSITORY_TOKEN } from '../interfaces/users-repository.interface';
import { RpcException } from '@nestjs/microservices';

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
    const user: User = this._createUserEntityFromRegistration(registration, accountOwnerRoles, accountOwnClaims)

    return new UserDto(await this._usersRepository.save(user));
  }


  public async searchUsers(filter: AccountUsersSearchFilter, pageable: IPageable): Promise<Page<UserDto>> {
    console.log("filter is ", filter);
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

      console.log("options are ", options)
    
    const [users, count] = await this._usersRepository.findByPageable(pageable, options);
    return new Page<UserDto>(users.map(user => new UserDto({...user})), count, pageable);
  }


  public async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
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

    const savedUsers: User = await this._usersRepository.save(
      this._usersRepository.create({
        ...createUserDto
      })
    );

    return new UserDto({ ...savedUsers });
  }


  public async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
    const existingUser: User | null = await this._usersRepository.findByCondition({
      where: [{ id: userId }]
    });

    if (!existingUser) {
      throw new RpcException(
        new BadRequestException("User does not exist with!")
      )
    }

    const updatedUser: User = await this._usersRepository.save({
      ...existingUser,
      ...updateUserDto,
    })

    return new UserDto({ ...updatedUser });
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
