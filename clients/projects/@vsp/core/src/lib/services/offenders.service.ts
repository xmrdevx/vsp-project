import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService, } from './environment.service';
import { DistanceUnit, OffendersSearchFilter, Page, PageRequest } from '../models'
import { Offender } from '../entities';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable()
export class OffendersService extends AbstractCrudService<Offender, string> {
  private readonly _endpointSlug: string = 'offenders';

  constructor(
    protected environmentService: EnvironmentService,
    protected httpClient: HttpClient
  ) {
    super(httpClient, environmentService, 'offenders');
  }

  public getLatestOffenders(count?: number): Observable<Offender[]> {
    const queryParams: { [key: string]: string } = { count: ''+(count || 6) };
    return this.httpClient.get<Offender[]>(
      `${this.environmentService.getBaseApiUrl()}/${this._endpointSlug}/latest`,
      { params: queryParams }
    );
  }

  public searchOffenders(searchFilter: OffendersSearchFilter, pageRequest: PageRequest): Observable<Page<Offender>> {
    const queryParams: { [key: string]: string } = {
      offenderName: searchFilter.offenderName || '',
      size: pageRequest.size.toString(),
      index: pageRequest.index.toString(),
      column: pageRequest?.sort?.column?.toString() || '',
      direction: pageRequest?.sort?.direction?.toString() || ''
    };

    if (searchFilter?.location?.location?.latitude && searchFilter?.location.location?.longitude) {
      queryParams['locationLatitude'] = ''+searchFilter?.location?.location?.latitude;
      queryParams['locationLongitude'] = ''+searchFilter?.location?.location?.longitude;
      queryParams['locationFullAddressText'] = searchFilter?.location?.fullAddressString || '';
      queryParams['distance'] = ''+searchFilter.distance || '20';
      queryParams['distanceUnit'] = searchFilter.distanceUnit || DistanceUnit.Miles;
    }

    return this.httpClient.get<Page<Offender>>(
      `${this.environmentService.getBaseApiUrl()}/${this._endpointSlug}/search`,
      { params: queryParams }
    );
  }
}
