import { GeocodingLocationDto, SearchGeoLocationsByTextRequestDto } from '@vsp/common';

export const GEOCODING_API_CLIENT_TOKEN: string = 'GEOCODING_API_CLIENT_TOKEN';

export interface IGeocodingApiClient {
  resolveLocationsFromText(request: SearchGeoLocationsByTextRequestDto): Promise<GeocodingLocationDto[]>;
}
