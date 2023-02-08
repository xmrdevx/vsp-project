import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CoreModule } from '@vsp/core';
import { LoggerModule } from '@vsp/logger';

import { GeocodingController } from './controllers/geocoding.controller';
import { GEOCODING_SERVICE_TOKEN } from './interfaces/geocoding-service.interface';
import { GeocodingService } from './services/geocoding.service';
import { GEOCODING_API_CLIENT_TOKEN } from './interfaces/geocoding-api-client.interface';
import { MyPvtGeocodingApiClientService } from './services/my-pvt-geocoding-api-client.service';

@Module({
  imports: [
    HttpModule,
    CoreModule.forRoot(),
    LoggerModule,
  ],
  controllers: [
    GeocodingController
  ],
  providers: [
    {
      provide: GEOCODING_SERVICE_TOKEN,
      useClass: GeocodingService
    },
    {
      provide: GEOCODING_API_CLIENT_TOKEN,
      useClass: MyPvtGeocodingApiClientService
    }
  ],
})
export class GeocodingModule {}
