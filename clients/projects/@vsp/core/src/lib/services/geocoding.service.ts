import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeocodingLocation } from '../models';
import { EnvironmentService } from './environment.service';

@Injectable()
export class GeocodingService {
  private readonly _endpointSlug: string = 'geocoding';
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _httpClient: HttpClient = inject(HttpClient);

  public searchGeocodingLocationsByText(text: string): Observable<GeocodingLocation[]> {
    var queryParams: { [key: string]: string } = { text: text };
    return this._httpClient.get<GeocodingLocation[]>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/locations/by-text`,
      { params: queryParams }
    );
  }
}
