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
  streamsMicroserviceProvider } from './gateway.providers';

import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

import { PermissionsController } from './controllers/permissions.controller';
import { StreamsController } from './controllers/streams.controller';
import { GeocodingController } from './controllers/geocoding.controller';

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
    GeocodingController
  ],
  providers: [
    identityMicroserviceProvider,
    streamsMicroserviceProvider,
    geocodingMicroserviceProvider, 
    JwtStrategy,
    LocalStrategy,
    HttpCacheInterceptor
  ],
})
export class GatewayModule {}
