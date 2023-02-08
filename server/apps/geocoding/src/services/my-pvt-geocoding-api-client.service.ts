import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import { AxiosResponse } from 'axios';

import { EnvironmentService } from '@vsp/core';
import { GeocodingLocationDto, MapCoordinateDto, SearchGeoLocationsByTextRequestDto } from '@vsp/common';

import { IGeocodingApiClient } from '../interfaces/geocoding-api-client.interface';
import { MyPvtLocation, MyPvtLocationsResponse } from '../models/my-pvt.models';

@Injectable()
export class MyPvtGeocodingApiClientService implements IGeocodingApiClient {
  private readonly _baseApiUrl: string;

  constructor(
    private readonly _environmentService: EnvironmentService,
    private readonly _httpService: HttpService 
  ) {
    const baseUri: string = this._environmentService.get('GEOCODING_BASE_URI');
    const apiKey: string = this._environmentService.get('GEOCODING_API_KEY');
    const countryCodes: string = this._environmentService.get('GEOCODING_COUNTRY_CODES');
    this._baseApiUrl = `${baseUri}?apiKey=${apiKey}&countryFilter=${countryCodes}`;
  }

  public async resolveLocationsFromText(request: SearchGeoLocationsByTextRequestDto): Promise<GeocodingLocationDto[]> {
    return await firstValueFrom(
      this._httpService
        .get(`${this._baseApiUrl}&searchText=${request.text}`)
        .pipe(
          map((response: AxiosResponse<MyPvtLocationsResponse>) => response?.data?.locations || []),
          map((locations: MyPvtLocation[]) => locations.map(location => new GeocodingLocationDto({
            fullAddressString: location?.formattedAddress || '',
            location: {
              ...location.referencePosition,
              longitude: location?.referencePosition?.longitude || 0,
              latitude: location?.referencePosition?.latitude || 0
            } satisfies MapCoordinateDto
          } satisfies GeocodingLocationDto))),
          catchError(error => of([])) // return empty array on error
        )
      );
  }
}