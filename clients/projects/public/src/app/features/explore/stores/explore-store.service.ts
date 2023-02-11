import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, EMPTY, forkJoin, Observable, switchMap, take, tap } from 'rxjs';

import { Case, LoadingState, MapBounds, MapMarker, MissingPerson, MissingService, Offender, OffendersService } from '@vsp/core';

import { ExploreService } from '@vsp/public/core/services/explore.service';

export interface ExploreState {
  currentMapBounds: MapBounds | null,
  currentMapZoom: number | null,

  selectedOffenderLoadingState: LoadingState,
  selectedOffender: Offender | null,
  selectedMissingLoadingState: LoadingState,
  selectedMissing: MissingPerson | null,

  currentOffendersMapMarkersLoadingState: LoadingState,
  currentOffendersMapMarkers: MapMarker<Case>[] | null,
  currentMissingPeopleMapMarkersLoadingState: LoadingState,
  currentMissingPeopleMapMarkers: MapMarker<MissingPerson>[] | null,
}

@Injectable({
  providedIn: 'root'
})
export class ExploreStore extends ComponentStore<ExploreState> {
  private readonly _exploreService: ExploreService = inject(ExploreService);
  private readonly _offendersService: OffendersService = inject(OffendersService);
  private readonly _missingService: MissingService = inject(MissingService);

  public readonly currentMapMarkersLoadingState$ = this.select(state => state.currentOffendersMapMarkersLoadingState);
  public readonly currentMapBounds$ = this.select(state => state.currentMapBounds);
  public readonly currentMapZoom$ = this.select(state => state.currentMapZoom);

  public readonly selectedOffenderLoadingState$ = this.select(state => state.selectedOffenderLoadingState);
  public readonly selectedOffender$ = this.select(state => state.selectedOffender);
  public readonly selectedMissingLoadingState$ = this.select(state => state.selectedMissingLoadingState);
  public readonly selectedMissing$ = this.select(state => state.selectedMissing);

  public readonly currentOffendersMapMarkersLoadingState$ = this.select(state => state.currentOffendersMapMarkersLoadingState);
  public readonly currentOffendersMapMarkers$ = this.select(state => state.currentOffendersMapMarkers);
  public readonly currentMissingPeopleMapMarkersLoadingState$ = this.select(state => state.currentMissingPeopleMapMarkersLoadingState);
  public readonly currentMissingPeopleMarkMarkers$ = this.select(state => state.currentMissingPeopleMapMarkers);
  
  constructor() {
    super({
      currentMapBounds: null,
      currentMapZoom: null,
      selectedOffenderLoadingState: LoadingState.INITIAL,
      selectedOffender: null,
      selectedMissingLoadingState: LoadingState.INITIAL,
      selectedMissing: null,
      currentOffendersMapMarkersLoadingState: LoadingState.INITIAL,
      currentOffendersMapMarkers: null,
      currentMissingPeopleMapMarkersLoadingState: LoadingState.INITIAL,
      currentMissingPeopleMapMarkers: null,
    });
  }

  public readonly setMapBounds = this.updater((state: ExploreState, mapBounds: MapBounds | null) => ({
    ...state,
    currentMapBounds: mapBounds
  }));

  public readonly setMapZoom = this.updater((state: ExploreState, zoom: number) => ({
    ...state,
    currentMapZoom: zoom
  }));

  public readonly setOffenderCaseMapMappers = this.updater((state: ExploreState, mapMarkers: MapMarker<Case>[] | null) => ({
    ...state,
    currentOffendersMapMarkers: mapMarkers
  }));

  public readonly setMissingPeopleMapMarkers = this.updater((state: ExploreState, mapMarkers: MapMarker<MissingPerson>[] | null) => ({
    ...state,
    currentMissingPeopleMapMarkers: mapMarkers
  }));

  public setOffendersMapMarkersLoadingState = this.updater((state: ExploreState, loadingState: LoadingState) => ({
    ...state,
    currentOffendersMapMarkersLoadingState: loadingState
  }));

  public setMissingPeopleMapMarkersLoadingState = this.updater((state: ExploreState, loadingState: LoadingState) => ({
    ...state,
    currentMissingPeopleMapMarkersLoadingState: loadingState
  }));

  public readonly setSelectedOffender = this.updater((state: ExploreState, offender: Offender | null) => ({
    ...state,
    selectedOffender: offender
  }));

  public readonly resetSelectedOffender = this.updater((state: ExploreState) => ({
    ...state,
    selectedOffender: null,
    selectedOffenderLoadingState: LoadingState.INITIAL
  }));

  public readonly setSelectedOffenderLoadingState = this.updater((state: ExploreState, loadingState: LoadingState) => ({
    ...state,
    selectedOffenderLoadingState: loadingState
  }));

  public readonly setSelectedMissing = this.updater((state: ExploreState, missingPerson: MissingPerson | null) => ({
    ...state,
    selectedMissing: missingPerson
  }));

  public readonly resetSelectedMissing = this.updater((state: ExploreState) => ({
    ...state,
    selectedMissing: null,
    selectedMissingLoadingState: LoadingState.INITIAL
  }));

  public readonly setSelectedMissingLoadingState = this.updater((state: ExploreState, loadingState: LoadingState) => ({
    ...state,
    selectedMissingLoadingState: loadingState
  }));

  
  public readonly mapBoundsChanged = this.effect((currentMapBounds$: Observable<MapBounds>) => {
    return currentMapBounds$.pipe(
      switchMap((currentMapBounds: MapBounds) => {
        this.setOffendersMapMarkersLoadingState(LoadingState.LOADING);
        // this.setMissingPeopleMapMarkersLoadingState(LoadingState.LOADING);
        return forkJoin([
          this._exploreService.searchOffendersCaseMapMarkersByMapBounds(currentMapBounds),
          // this._exploreService.searchMissingPeopleMapMarkersByMapBounds(currentMapBounds)
        ]).pipe(
          take(1),
          tapResponse(
            ([offendersMapMarkers/*, missingPeopleMapMarkers*/]) => {
              this.setOffenderCaseMapMappers(offendersMapMarkers);
              // this.setMissingPeopleMapMarkers(missingPeopleMapMarkers);
              this.setOffendersMapMarkersLoadingState(LoadingState.LOADED)
              // this.setMissingPeopleMapMarkersLoadingState(LoadingState.LOADED);
            },
            (e: string) => this.setOffendersMapMarkersLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });

  public readonly findOffenderById = this.effect((offenderId$: Observable<string>) => {
    return offenderId$.pipe(
      tap(() => this.setSelectedOffenderLoadingState(LoadingState.LOADING)),
      switchMap((offenderId: string) => {
        return this._offendersService.findOne(offenderId).pipe(
          take(1),
          tapResponse(
            offender => {
              this.setSelectedOffender(offender);
              this.setSelectedOffenderLoadingState(LoadingState.LOADED);
            },
            (e: string) => this.setSelectedOffenderLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });

  public readonly findMissingById = this.effect((missingId$: Observable<string>) => {
    return missingId$.pipe(
      tap(() => this.setSelectedMissingLoadingState(LoadingState.LOADING)),
      switchMap((missingId: string) => {
        return this._missingService.findOne(missingId).pipe(
          take(1),
          tapResponse(
            missingPerson => {
              this.setSelectedMissing(missingPerson);
              this.setSelectedMissingLoadingState(LoadingState.LOADED);
            },
            (e: string) => this.setSelectedMissingLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
