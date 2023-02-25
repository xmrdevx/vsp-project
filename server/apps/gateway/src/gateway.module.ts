import { CacheModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthorizationModule } from '@vsp/authorization';
import { CoreModule, CacheConfigService, EnvironmentService, HttpCacheInterceptor } from '@vsp/core';
import { LoggerModule } from '@vsp/logger';

import { AuthController } from './controllers/auth.controller';
import { AccountsController } from './controllers/accounts.controller';
import { 
  geocodingMicroserviceProvider, 
  identityMicroserviceProvider, 
  offendersMicroserviceProvider, 
  streamsMicroserviceProvider } from './gateway.providers';

import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

import { PermissionsController } from './controllers/permissions.controller';
import { StreamsController } from './controllers/streams.controller';
import { GeocodingController } from './controllers/geocoding.controller';
import { OffendersController } from './controllers/offenders.controller';
import { OffenderCasesController } from './controllers/offender-cases.controller';

@Module({
  imports: [
    CoreModule.forRoot(),
    AuthorizationModule,
    LoggerModule,
    PassportModule,
    CacheModule.registerAsync({
      imports: [CoreModule.forRoot()],
      useClass: CacheConfigService,
      inject: [EnvironmentService]
    }),
  ],
  controllers: [
    AuthController,
    AccountsController,
    PermissionsController,
    StreamsController,
    GeocodingController,
    OffendersController,
    OffenderCasesController
  ],
  providers: [
    identityMicroserviceProvider,
    streamsMicroserviceProvider,
    geocodingMicroserviceProvider,
    offendersMicroserviceProvider,
    JwtStrategy,
    LocalStrategy,
    HttpCacheInterceptor
  ],
})
export class GatewayModule {}
