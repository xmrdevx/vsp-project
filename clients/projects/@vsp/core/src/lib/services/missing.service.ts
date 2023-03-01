import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MissingPerson } from '../entities/missing-person.entity';
import { BaseComment } from '../entities/base-comment.entity';
import { MissingSearchFilter, PageRequest, Page } from '../models';
import { DistanceUnit } from '../enums';
import { AbstractCrudService } from './abstract-crud.service';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class MissingService extends AbstractCrudService<MissingPerson, string> {
  private readonly _endpointSlug: string = 'missing';

  constructor(
    protected environmentService: EnvironmentService,
    protected httpClient: HttpClient
  ) {
    super(httpClient, environmentService, 'missing');
  }

  public getLatestMissing(count?: number): Observable<MissingPerson[]> {
    const queryParams: { [key: string]: string } = { count: ''+(count || 6) };
    return this.httpClient.get<MissingPerson[]>(
      `${this.environmentService.getBaseApiUrl()}/${this._endpointSlug}/latest`,
      { params: queryParams }
    );
  }

  public searchMissing(searchFilter: MissingSearchFilter, pageRequest: PageRequest): Observable<Page<MissingPerson>> {
    const queryParams: { [key: string]: string } = {
      searchTerm: searchFilter.searchTerm || '',
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

    return this.httpClient.get<Page<MissingPerson>>(
      `${this.environmentService.getBaseApiUrl()}/${this._endpointSlug}/search`,
      { params: queryParams }
    );
  }

  public loadCommentsForMissingPerson(missingId: string, pageRequest: PageRequest): Observable<Page<Comment>> {
    const queryParams: { [key: string]: string } = {
      size: pageRequest.size.toString(),
      index: pageRequest.index.toString(),
      column: pageRequest?.sort?.column?.toString() || '',
      direction: pageRequest?.sort?.direction?.toString() || ''
    };

    return this.httpClient.get<Page<Comment>>(
      `${this.environmentService.getBaseApiUrl()}/${this._endpointSlug}/${missingId}/comments`,
      { params: queryParams }
    );
  }
}
