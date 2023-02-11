import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';

import { CoreModule, EnvironmentService } from '@vsp/core';

import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

import { HasAccessGuard } from './guards/has-access.guard';
import { HasPermissionsGuard } from './guards/has-permissions.guard';
import { HasRolesGuard } from './guards/has-roles.guard';

import { EnrichBodyWithTenantInterceptor } from './interceptors/enrich-body-with-tenant.interceptor';
import { EnrichBodyWithCreatedByInterceptor } from './interceptors/enrich-body-with-created-by.interceptor';
import { EnrichBodyWithUpdatedByInterceptor } from './interceptors/enrich-body-with-updated-by.interceptor';
import { EnrichBodyWithDeletedByInterceptor } from './interceptors/enrich-body-with-deleted-by.interceptor';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [CoreModule.forRoot()],
      useFactory: (environmentService: EnvironmentService) => {
        return {
          secret: environmentService.get('IDENTITY_JWT_SECRET'),
          publicKey: environmentService.get('IDENTITY_JWT_PUBLIC_KEY'),
          privateKey: environmentService.get('IDENTITY_JWT_PRIVATE_KEY'),
          signOptions: {
            expiresIn: environmentService.get('IDENTITY_JWT_EXPIRES_IN')
          },
          verifyOptions: {
            // Other validation options such as issuer
            ignoreExpiration: environmentService.get('IDENTITY_JWT_IGNORE_EXPIRATION') === 'true'
          }
        } as JwtModuleOptions
      },
      inject: [EnvironmentService]
    })
  ],
  providers: [
    JwtAuthGuard,
    HasAccessGuard,
    HasPermissionsGuard,
    HasRolesGuard,
    LocalAuthGuard,
    EnrichBodyWithTenantInterceptor,
    EnrichBodyWithCreatedByInterceptor,
    EnrichBodyWithUpdatedByInterceptor,
    EnrichBodyWithDeletedByInterceptor,
  ],
  exports: [
    JwtAuthGuard,
    HasAccessGuard,
    HasPermissionsGuard,
    HasRolesGuard,
    LocalAuthGuard,
    JwtModule,
    EnrichBodyWithTenantInterceptor,
    EnrichBodyWithCreatedByInterceptor,
    EnrichBodyWithUpdatedByInterceptor,
    EnrichBodyWithDeletedByInterceptor,
  ],
})
export class AuthorizationModule {}
