import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OffenderCase, EnvironmentService, MapBounds, MapMarker, MissingPerson } from '@vsp/core';


@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  private readonly _endpointSlug: string = 'offenders';
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _httpClient: HttpClient = inject(HttpClient);

  public searchOffendersCaseMapMarkersByMapBounds(mapBounds: MapBounds): Observable<MapMarker<OffenderCase>[]> {
    const queryParam: { [key: string]: string } = { 
      'northEastLatitude': mapBounds?.northEast?.latitude?.toString() || '0',
      'northEastLongitude': mapBounds?.northEast?.longitude?.toString() || '0',
      'southWestLatitude': mapBounds?.southWest?.latitude?.toString() || '0',
      'southWestLongitude': mapBounds?.southWest?.longitude?.toString() || '0'
    };
    return this._httpClient.get<MapMarker<OffenderCase>[]>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/cases/by-bounds/markers`,
      { params: queryParam }
    );
  }

  public searchMissingPeopleMapMarkersByMapBounds(mapBounds: MapBounds): Observable<MapMarker<MissingPerson>[]> {
    const queryParam: { [key: string]: string } = { 
      'northEastLatitude': mapBounds?.northEast?.latitude?.toString() || '0',
      'northEastLongitude': mapBounds?.northEast?.longitude?.toString() || '0',
      'southWestLatitude': mapBounds?.southWest?.latitude?.toString() || '0',
      'southWestLongitude': mapBounds?.southWest?.longitude?.toString() || '0'
    };
    return this._httpClient.get<MapMarker<MissingPerson>[]>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/missing/markers/by-bounds`,
      { params: queryParam }
    );
  }
}
