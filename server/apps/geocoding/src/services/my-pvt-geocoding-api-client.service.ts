import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import { AxiosResponse } from 'axios';

import { EnvironmentService } from '@vsp/core';
import { AddressDto, GeocodingLocationDto, MapCoordinateDto, SearchGeoLocationsByTextRequestDto } from '@vsp/common';

import { IGeocodingApiClient } from '../interfaces/geocoding-api-client.interface';
import { MyPvtLocation, MyPvtLocationsResponse } from '../models/my-pvt.models';

@Injectable()
export class MyPvtGeocodingApiClientService implements IGeocodingApiClient {
  private readonly _baseApiUrl: string;
  private readonly _defaultCountryCodes: string;


  constructor(
    private readonly _environmentService: EnvironmentService, private readonly _httpService: HttpService 
  ) {
    const baseUri: string = this._environmentService.get('GEOCODING_BASE_URI');
    const apiKey: string = this._environmentService.get('GEOCODING_API_KEY');
    this._defaultCountryCodes = this._environmentService.get('GEOCODING_COUNTRY_CODES');
    this._baseApiUrl = `${baseUri}?apiKey=${apiKey}`;
  }


  public async resolveLocationsFromText(request: SearchGeoLocationsByTextRequestDto): Promise<GeocodingLocationDto[]> {
    const countryCodes: string = request?.country?.trim().length 
      ? request.country 
      : this._defaultCountryCodes;

    return await firstValueFrom(
      this._httpService
        .get(`${this._baseApiUrl}&countryFilter=${countryCodes}&searchText=${request.text}`)
        .pipe(
          map((response: AxiosResponse<MyPvtLocationsResponse>) => response?.data?.locations || []),
          map((locations: MyPvtLocation[]) => this._toGeocodingLocationDtoList(locations)),
          catchError(error => of([])) // return empty array on error
        )
      );
  }

  
  private _toGeocodingLocationDtoList(locations: MyPvtLocation[]): GeocodingLocationDto[] {
    return locations.map(location => new GeocodingLocationDto({
      fullAddressString: location?.formattedAddress || '',
      location: {
        ...location.referencePosition,
        longitude: location?.referencePosition?.longitude || 0,
        latitude: location?.referencePosition?.latitude || 0
      } satisfies MapCoordinateDto,
      address: {
        street: `${location?.address?.houseNumber} ${location?.address?.street}`,
        street2: '',
        city: location?.address?.city || '',
        state: location?.address?.state?.length 
          ? location?.address?.state 
          : location?.address?.province?.length 
            ? location?.address?.province
            : '',
        zip: location?.address?.postalCode,
        country: location?.address?.countryName,
        longitude: location?.referencePosition?.longitude || 0,
        latitude: location?.referencePosition?.latitude || 0
      } as AddressDto
    } satisfies GeocodingLocationDto))
  }
}
