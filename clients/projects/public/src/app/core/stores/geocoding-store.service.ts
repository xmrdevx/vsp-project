import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { take } from 'rxjs';

import { GeocodingService, GeocodingLocation } from '@vsp/core';

export interface GeocodingState {
  selectedGeocodingLocation: GeocodingLocation | null,
  geocodingLocationsResult: GeocodingLocation[] | null,
}

@Injectable({
  providedIn: 'root'
})
export class GeocodingStore extends ComponentStore<GeocodingState> {
  public readonly selectedGeocodingLocation$ = this.select((state: GeocodingState) => state.selectedGeocodingLocation);
  public readonly geocodingLocationsResult$ = this.select(state => state.geocodingLocationsResult);

  constructor(private _geocodingService: GeocodingService) {
    super({
      selectedGeocodingLocation: null,
      geocodingLocationsResult: null
    })
  }

  public readonly setSelectedGeocodingLocation = this.updater((state: GeocodingState, location: GeocodingLocation | null) => ({
    ...state,
    selectedGeocodingLocation: location
  }));

  // @TODO convert this to an effect?
  public searchGeocodingLocationsByText(text: string): void {
    this._geocodingService.searchGeocodingLocationsByText(text)
      .pipe(take(1))
      .subscribe((locations: GeocodingLocation[]) => {
        this.setState((state) => ({
          ...state,
          geocodingLocationsResult: locations
        }))
      });
  }
}
