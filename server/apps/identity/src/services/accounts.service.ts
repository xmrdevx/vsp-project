import { Inject, Injectable } from '@nestjs/common';
import { In } from 'typeorm';

import { Claim, RegistrationDto, Role, RoleTypes, Tenant, User, UserDto } from '@vsp/common';
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
      .findWithRelations({ where: { name: In([RoleTypes.ADMIN, RoleTypes.USER]) }});

    // Get claims for account owner's user - This is all claims that are flagged as isSetByTenant
    const accountOwnClaims: Claim[] = await this._claimsRepository
      .findAll({ where: { isSetByTenant: true }});

    // Create new User from registration
    const user: User = this._createUserEntityFromRegistration(registration, accountOwnerRoles, accountOwnClaims)
    return new UserDto(await this._usersRepository.save(user));
  }

  private _createUserEntityFromRegistration(registration: RegistrationDto, roles: Role[], claims: Claim[]): User {
    return this._usersRepository.create({
      ...registration.user,
      username: registration?.user?.username?.trim()?.toLowerCase(),
      email: registration?.user?.username?.trim().toLowerCase(),
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
