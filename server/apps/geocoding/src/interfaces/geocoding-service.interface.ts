import { GeocodingLocationDto, SearchGeoLocationsByTextRequestDto } from '@vsp/common';

export const GEOCODING_SERVICE_TOKEN: string = 'GEOCODING_SERVICE_TOKEN';

export interface IGeocodingService {
  /**
   * Searches locations by raw text stream and country digraph
   * @param {SearchGeoLocationsByTextRequestDto} request The query and country to search.
   * @returns {GeocodingLocationDto[]} An array of matching locations
   * @abstract
   * @async
   */
  searchLocationsByText(request: SearchGeoLocationsByTextRequestDto): Promise<GeocodingLocationDto[]>;
}
