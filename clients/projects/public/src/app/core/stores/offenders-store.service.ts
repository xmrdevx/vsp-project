import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';

import { Offender, OffendersSearchFilter, Page, PageRequest, OffendersService, LoadingState } from '@vsp/core';
import { catchError, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { defaultOffendersSearchFilter } from '../../features/offenders/constants/offenders-search.defaults';

export interface OffendersState {
  latestOffendersLoadingState: LoadingState,
  latestOffenders: Offender[] | null,
  offendersSearchPageLoadingState: LoadingState,
  currentOffendersSearchPage: Page<Offender> | null,
  currentOffendersSearchFilter: OffendersSearchFilter | null,
  selectedOffenderLoadingState: LoadingState,
  selectedOffender: Offender | null,
}

@Injectable({
  providedIn: 'root'
})
export class OffendersStore extends ComponentStore<OffendersState>  {
  public readonly latestOffendersLoadingState$ = this.select((state: OffendersState) => state.latestOffendersLoadingState);
  public readonly latestOffenders$ = this.select((state: OffendersState) => state.latestOffenders);
  
  public readonly offendersSearchPageLoadingState$ = this.select((state: OffendersState) => state.offendersSearchPageLoadingState);
  
  public readonly currentOffendersSearchPage$ = this.select((state: OffendersState) => state.currentOffendersSearchPage);
  public readonly currentOffendersSearchFilter$ = this.select((state: OffendersState) => state.currentOffendersSearchFilter);

  public readonly selectedOffenderLoadingState$ = this.select((state: OffendersState) => state.selectedOffenderLoadingState);
  public readonly selectedOffender$ = this.select((state: OffendersState) => state.selectedOffender);

  constructor(private _offendersService: OffendersService) {
    super({
      latestOffendersLoadingState: LoadingState.INITIAL,
      latestOffenders: null,
      offendersSearchPageLoadingState: LoadingState.INITIAL,
      currentOffendersSearchPage: null,
      currentOffendersSearchFilter: defaultOffendersSearchFilter,
      selectedOffenderLoadingState: LoadingState.INITIAL,
      selectedOffender: null,
    });
  }

  public readonly setLatestOffenders = this.updater((state: OffendersState, latestOffenders: Offender[] | null) => ({
    ...state,
    latestOffenders: latestOffenders
  }));

  public readonly setCurrentOffendersSearchPage = this.updater((state: OffendersState, page: Page<Offender>) => ({
    ...state,
    currentOffendersSearchPage: page
  }));

  public readonly setCurrentOffendersSearchFilter = this.updater((state: OffendersState, searchFilter: OffendersSearchFilter) => ({
    ...state,
    currentOffendersSearchFilter: searchFilter
  }));

  public readonly setOffenserSearchPageLoadingState = this.updater((state: OffendersState, loadingState: LoadingState) => ({
    ...state,
    offendersSearchPageLoadingState: loadingState
  }));

  public readonly setLatestOffendersLoadingState = this.updater((state: OffendersState, loadingState: LoadingState) => ({
    ...state,
    latestOffendersLoadingState: loadingState
  }));

  public readonly setSelectedOffender = this.updater((state: OffendersState, offender: Offender | null) => ({
    ...state,
    selectedOffender: offender
  }));

  public readonly setSelectedOffenderLoadingState = this.updater((state: OffendersState, loadingState: LoadingState) => ({
    ...state,
    selectedOffenderLoadingState: loadingState
  }));

  public readonly getLatestOffenders = this.effect(() => {
    return this._offendersService.getLatestOffenders().pipe(
      take(1),
      tap(() => this.setLatestOffendersLoadingState(LoadingState.LOADING)),
      tapResponse(
        offenders => {
          this.setLatestOffenders(offenders);
          this.setLatestOffendersLoadingState(LoadingState.LOADED)
        },
        (e: string) => this.setLatestOffendersLoadingState(LoadingState.ERROR)
      ),
      catchError(() => EMPTY)
    );
  });

  public readonly searchOffenders = this.effect((props$: Observable<{ searchFilter: OffendersSearchFilter, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setOffenserSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(({ searchFilter, pageRequest }) => {
        return this._offendersService.searchOffenders(searchFilter, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setCurrentOffendersSearchPage(page);
              this.setOffenserSearchPageLoadingState(LoadingState.LOADED);
            },
            (e: string) => this.setOffenserSearchPageLoadingState(LoadingState.ERROR)
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
}
