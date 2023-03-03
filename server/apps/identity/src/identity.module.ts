import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationModule } from '@vsp/authorization';

import { Account, Client, PermissionTemplate, RefreshToken, Role, User } from '@vsp/common';
import { UserAddress } from '@vsp/common/entities/identity/user-address.entity';
import { Claim } from '@vsp/common/entities/identity/claim.entity';
import { DeviceCode } from '@vsp/common/entities/identity/device-code.entity';
import { Profile } from '@vsp/common/entities/identity/profile.entity';
import { Tenant } from '@vsp/common/entities/identity/tenant.entity';
import { CoreModule, TypeOrmConfigService } from '@vsp/core';
import { LoggerModule } from '@vsp/logger';

import { AccountsController } from './controllers/accounts.controller';
import { AuthController } from './controllers/auth.controller';
import { PermissionsController } from './controllers/permissions.controller';

import { AUTH_SERVICE_TOKEN } from './interfaces/auth-service.interface';
import { AuthService } from './services/auth.service';

import { TOKENS_SERVICE_TOKEN } from './interfaces/tokens-service.interface';
import { TokensService } from './services/tokens.service';

import { REFRESH_TOKENS_REPOSITORY_TOKEN } from './interfaces/refresh-token-repository.interface';
import { RefreshTokensRepository } from './repositories/refresh-tokens.repository';

import { USERS_REPOSITORY_TOKEN } from './interfaces/users-repository.interface';
import { UsersRepository } from './repositories/users.repository';

import { USERS_SERVICE_TOKEN } from './interfaces/users-service.interface';
import { UsersService } from './services/users.service';

import { CLIENTS_REPOSITORY_TOKEN } from './interfaces/clients-repository.interface';
import { ClientsRepository } from './repositories/clients.repository';

import { ACCOUNTSS_SERVICE_TOKEN } from './interfaces/accounts-service.interface';
import { AccountsService } from './services/accounts.service';

import { TENANTS_REPOSITORY_TOKEN } from './interfaces/tenants-repository.interface';
import { TenantsRepository } from './repositories/tenants.repository';

import { ROLES_REPOSITORY_TOKEN } from './interfaces/roles-repository.interface';
import { RolesRepository } from './repositories/roles.repository';

import { CLAIMS_REPOSITORY_TOKEN } from './interfaces/claims-repository.interface';
import { ClaimsRepository } from './repositories/claims.repository';

import { PERMISSIONS_SERVICE_TOKEN } from './interfaces/permissions-service.interface';
import { PermissionsService } from './services/permissions.service';

import { PERMISSION_TEMPLATES_REPOSITORY_TOKEN } from './interfaces/permission-template-repository.interface';
import { PermissionTemplatesRepository } from './repositories/permission-templates.repository';

import { PERMISSION_TEMPLATES_SERVICE_TOKEN } from './interfaces/permission-template-service.interface';
import { PermissionTemplatesService } from './services/permission-templates.service';


@Module({
  imports: [
    CoreModule.forRoot(),
    LoggerModule,
    AuthorizationModule,
    TypeOrmModule.forRootAsync({
      imports: [CoreModule.forRoot()],
      useClass: TypeOrmConfigService
    }),
    TypeOrmModule.forFeature([
      Account,
      Claim,
      Client,
      DeviceCode,
      PermissionTemplate,
      Profile,
      RefreshToken,
      Role,
      Tenant,
      User,
      UserAddress,
    ])
  ],
  controllers: [
    AccountsController,
    AuthController,
    PermissionsController,
  ],
  providers: [
    {
      provide: ACCOUNTSS_SERVICE_TOKEN,
      useClass: AccountsService
    },
    {
      provide: AUTH_SERVICE_TOKEN,
      useClass: AuthService
    },
    {
      provide: TOKENS_SERVICE_TOKEN,
      useClass: TokensService
    },
    {
      provide: USERS_SERVICE_TOKEN,
      useClass: UsersService
    },
    {
      provide: USERS_REPOSITORY_TOKEN,
      useClass: UsersRepository
    },
    {
      provide: REFRESH_TOKENS_REPOSITORY_TOKEN,
      useClass: RefreshTokensRepository
    },
    {
      provide: CLIENTS_REPOSITORY_TOKEN,
      useClass: ClientsRepository
    },
    {
      provide: TENANTS_REPOSITORY_TOKEN,
      useClass: TenantsRepository
    },
    {
      provide: ROLES_REPOSITORY_TOKEN,
      useClass: RolesRepository
    },
    {
      provide: CLAIMS_REPOSITORY_TOKEN,
      useClass: ClaimsRepository
    },
    {
      provide: PERMISSIONS_SERVICE_TOKEN,
      useClass: PermissionsService
    },
    {
      provide: PERMISSION_TEMPLATES_REPOSITORY_TOKEN,
      useClass: PermissionTemplatesRepository
    },
    {
      provide: PERMISSION_TEMPLATES_SERVICE_TOKEN,
      useClass: PermissionTemplatesService
    },
  ],
})
export class IdentityModule {}
