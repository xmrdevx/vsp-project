import { GeocodingLocationDto, SearchGeoLocationsByTextRequestDto } from '@vsp/common';

export const GEOCODING_API_CLIENT_TOKEN: string = 'GEOCODING_API_CLIENT_TOKEN';

export interface IGeocodingApiClient {
  /**
   * Search locations by raw text and country digraphy
   * @param {SearchGeoLocationsByTextRequestDto} request The query string and country to search.
   * @returns {GeocodingLocationDto[]} An array of matching locations.
   * @async
   * @abstract
   */
  resolveLocationsFromText(request: SearchGeoLocationsByTextRequestDto): Promise<GeocodingLocationDto[]>;
}
