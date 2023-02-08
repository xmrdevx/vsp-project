import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Media, Comment } from '../entities';
import { DistanceUnit, Page, PageRequest } from '../models';

import { AbstractCrudService } from './abstract-crud.service';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class MediaService  extends AbstractCrudService<Media, string> {
  private readonly _endpointSlug: string = 'media';

  constructor(
    protected environmentService: EnvironmentService,
    protected httpClient: HttpClient
  ) {
    super(httpClient, environmentService, 'media');
  }

  public searchVideoMedia(searchFilter: any, pageRequest: PageRequest): Observable<Page<Media>> {
    const queryParams: { [key: string]: string } = {
      searchKeywords: searchFilter.searchKeywords || '',
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

    return this.httpClient.get<Page<Media>>(
      `${this.environmentService.getBaseApiUrl()}/${this._endpointSlug}/videos/search`,
      { params: queryParams }
    );
  }

  public loadNearByVideoMedia(videoId: string, pageRequest: PageRequest): Observable<Page<Media>> {
    const queryParams: { [key: string]: string } = {
      size: pageRequest.size.toString(),
      index: pageRequest.index.toString(),
      column: pageRequest?.sort?.column?.toString() || '',
      direction: pageRequest?.sort?.direction?.toString() || ''
    };

    return this.httpClient.get<Page<Media>>(
      `${this.environmentService.getBaseApiUrl()}/${this._endpointSlug}/videos/${videoId}/near-by`,
      { params: queryParams }
    );
  }

  public loadCommentsForMedia(mediaId: string, pageRequest: PageRequest): Observable<Page<Comment>> {
    const queryParams: { [key: string]: string } = {
      size: pageRequest.size.toString(),
      index: pageRequest.index.toString(),
      column: pageRequest?.sort?.column?.toString() || '',
      direction: pageRequest?.sort?.direction?.toString() || ''
    };

    return this.httpClient.get<Page<Comment>>(
      `${this.environmentService.getBaseApiUrl()}/${this._endpointSlug}/${mediaId}/comments`,
      { params: queryParams }
    );
  }
}
