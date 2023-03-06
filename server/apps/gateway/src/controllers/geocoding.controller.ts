import { CacheTTL, Controller, Get, Inject, Query, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, Observable, throwError } from 'rxjs';

import { LoggerService } from '@vsp/logger';
import { GeocodingLocationDto, GEOCODING_SERVICE_TOKEN, SearchGeoLocationsByTextRequestDto, searchLocationsByText } from '@vsp/common';
import { HttpCacheInterceptor } from '@vsp/core';

@ApiTags('geocoding')
@Controller('geocoding')
@UseInterceptors(HttpCacheInterceptor)
export class GeocodingController {
  @Inject(GEOCODING_SERVICE_TOKEN)
  private readonly _geocodingServiceClient: ClientProxy;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(GeocodingController.name);
  }

  @Get('locations/by-text')
  @CacheTTL(86400) // Cache for 1 day
  public searchLocationsByText(
      @Query('text') text: string, @Query('country') country: string = 'US'): Observable<GeocodingLocationDto[]> {

    return this._geocodingServiceClient
      .send(searchLocationsByText, new SearchGeoLocationsByTextRequestDto({ text, country }))
      .pipe(catchError(error => throwError(() => new RpcException(error))));
  }
}
