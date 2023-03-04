import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Address, EnvironmentService, Link, Offender, OffenderComment, Page, PageRequest } from '@vsp/core';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

@Injectable({
  providedIn: 'root'
})
export class OffendersService {
  private readonly _endpointSlug: string = 'offenders';
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _http: HttpClient = inject(HttpClient);

  public createOffender(offender: Offender): Observable<Offender> {
    return this._http.post<Offender>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}`,
      offender
    );
  }

  public createOffenderComment(offenderId: string, offenderComment: OffenderComment): Observable<OffenderComment> {
    return this._http.post<OffenderComment>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}/comments`,
      offenderComment
    );
  }

  public searchOffenders(filter: BasicQuerySearchFilter, pageRequest: PageRequest): Observable<Page<Offender>> {
    const queryParams: {[key: string]: any} = !pageRequest ? {} : { 
      pageNumber: pageRequest.index,
      pageSize: pageRequest.size,
      column: pageRequest.sort.column,
      direction: pageRequest.sort.direction,
      query: filter?.query || '',
      isDeleted: filter?.isDeleted ?? '',
    };
    return this._http.get<Page<Offender>>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/search`,
      { params: queryParams }
    );
  }

  public searchOffenderComments(offenderId: string, filter: BasicQuerySearchFilter, pageRequest: PageRequest): Observable<Page<OffenderComment>> {
    const queryParams: {[key: string]: any} = !pageRequest ? {} : { 
      pageNumber: pageRequest.index,
      pageSize: pageRequest.size,
      column: pageRequest.sort.column,
      direction: pageRequest.sort.direction,
      query: filter?.query || '',
      isDeleted: filter?.isDeleted ?? '',
    };
    return this._http.get<Page<OffenderComment>>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}/comments/search`,
      { params: queryParams }
    );
  }

  public updateOffender(offenderId: string, offender: Offender): Observable<Offender> {
    return this._http.put<Offender>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}`,
      offender
    );
  }

  public getOffenderById(offenderId: string): Observable<Offender> {
    return this._http.get<Offender>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}`
    );
  }

  public deleteOffender(offenderId: string): Observable<Offender> {
    return this._http.delete<Offender>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}`
    );
  }

  public restoreOffender(offenderId: string): Observable<Offender> {
    return this._http.delete<Offender>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}/restore`
    );
  }

  public createOffenderAddress(offenderId: string, address: Address): Observable<Address> {
    return this._http.post<Address>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}/addresses`,
      address
    );
  }

  public getOffenderAddresses(offenderId: string): Observable<Address[]> {
    return this._http.get<Address[]>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}/addresses`
    );
  }

  public createOffenderLink(offenderId: string, link: Link): Observable<Link> {
    return this._http.post<Link>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}/links`,
      link
    );
  }

  public getOffenderLinks(offenderId: string): Observable<Link[]> {
    return this._http.get<Link[]>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/${offenderId}/links`
    );
  }
}
