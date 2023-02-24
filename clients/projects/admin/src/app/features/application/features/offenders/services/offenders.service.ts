import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService, Offender, Page, PageRequest } from '@vsp/core';
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

  public searchOffenders(filter: BasicQuerySearchFilter, pageRequest: PageRequest): Observable<Page<Offender>> {
    const queryParams: {[key: string]: any} = !pageRequest ? {} : { 
      pageNumber: pageRequest.index,
      pageSize: pageRequest.size,
      sortCol: pageRequest.sort.column,
      sortDir: pageRequest.sort.direction,
      query: filter?.query || '',
      isDeleted: filter?.isDeleted ?? '',
    };
    return this._http.get<Page<Offender>>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/search`,
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
}
