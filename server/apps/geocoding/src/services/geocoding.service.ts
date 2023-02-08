import { Inject, Injectable } from '@nestjs/common';
import { GeocodingLocationDto, SearchGeoLocationsByTextRequestDto } from '@vsp/common';

import { LoggerService } from '@vsp/logger';
import { GEOCODING_API_CLIENT_TOKEN, IGeocodingApiClient } from '../interfaces/geocoding-api-client.interface';
import { IGeocodingService } from '../interfaces/geocoding-service.interface';

@Injectable()
export class GeocodingService implements IGeocodingService {
  @Inject(GEOCODING_API_CLIENT_TOKEN)
  private readonly _geocodingApiClient: IGeocodingApiClient;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(GeocodingService.name);
  }

  public async searchLocationsByText(
    request: SearchGeoLocationsByTextRequestDto
  ): Promise<GeocodingLocationDto[]> {
    return await this._geocodingApiClient.resolveLocationsFromText(request);
  }
}
