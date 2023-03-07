import { Controller, Inject,  } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { GeocodingLocationDto, SearchGeoLocationsByTextRequestDto, searchLocationsByText } from '@vsp/common';
import { LoggerService } from '@vsp/logger';

import { GEOCODING_SERVICE_TOKEN, IGeocodingService } from '../interfaces/geocoding-service.interface';

@Controller()
export class GeocodingController {
  @Inject(GEOCODING_SERVICE_TOKEN)
  private readonly _geocodingService: IGeocodingService;


  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(GeocodingController.name);
  }

  
  @MessagePattern(searchLocationsByText)
  public async searchLocationsByText(request: SearchGeoLocationsByTextRequestDto): Promise<GeocodingLocationDto[]> {
    try {
      return await this._geocodingService.searchLocationsByText(request);
    } catch (error) {
      this._logger.error('Error searching geolocations by text', error);
      throw error;
    }
  }
}
