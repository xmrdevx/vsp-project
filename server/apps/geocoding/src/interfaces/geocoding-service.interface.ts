import { GeocodingLocationDto, SearchGeoLocationsByTextRequestDto } from '@vsp/common';

export const GEOCODING_SERVICE_TOKEN: string = 'GEOCODING_SERVICE_TOKEN';

export interface IGeocodingService {
  searchLocationsByText(request: SearchGeoLocationsByTextRequestDto): Promise<GeocodingLocationDto[]>;
}
