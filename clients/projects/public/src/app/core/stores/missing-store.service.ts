import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap, take, tap } from 'rxjs';

import { LoadingState, MissingPerson, Page, MissingSearchFilter, MissingService, PageRequest, Comment } from '@vsp/core';

import { defaultMissingSearchFilter } from '../constants/missing-search.defaults';

export interface MissingState {
  latestMissingLoadingState: LoadingState,
  latestMissing: MissingPerson[] | null,
  missingSearchPageLoadingState: LoadingState,
  currentMissingSearchPage: Page<MissingPerson> | null,
  currentMissingSearchFilter: MissingSearchFilter | null,
  selectedMissingLoadingState: LoadingState,
  selectedMissing:MissingPerson | null,
  missingCommentsLoadingState: LoadingState,
  currentMissingCommentsPage: Page<Comment> | null,
  loadedMissingCommentsPages: Page<Comment>[]
}

@Injectable({
  providedIn: 'root'
})
export class MissingStore extends ComponentStore<MissingState> {
  public readonly latestMissingLoadingState$ = this.select((state: MissingState) => state.latestMissingLoadingState);
  public readonly latestMissing$ = this.select((state: MissingState) => state.latestMissing);
  public readonly missingSearchPageLoadingState$ = this.select((state: MissingState) => state.missingSearchPageLoadingState);
  public readonly currentMissingSearchPage$ = this.select((state: MissingState) => state.currentMissingSearchPage);
  public readonly currentMissingSearchFilter$ = this.select((state: MissingState) => state.currentMissingSearchFilter);
  public readonly selectedMissingLoadingState$ = this.select((state: MissingState) => state.selectedMissingLoadingState);
  public readonly selectedMissing$ = this.select((state: MissingState) => state.selectedMissing);
  public readonly missingCommentsLoadingState$ = this.select(state => state.missingCommentsLoadingState);
  public readonly currentMissingCommentsPage$ = this.select((state: MissingState) => state.currentMissingCommentsPage);
  public readonly loadedMissingCommentsPages$ = this.select((state: MissingState) => state.loadedMissingCommentsPages);

  constructor(
    private _missingService: MissingService
  ) {
    super({
      latestMissingLoadingState: LoadingState.INITIAL,
      latestMissing: null,
      missingSearchPageLoadingState: LoadingState.INITIAL,
      currentMissingSearchPage: null,
      currentMissingSearchFilter: defaultMissingSearchFilter,
      selectedMissingLoadingState: LoadingState.INITIAL,
      selectedMissing: null,
      missingCommentsLoadingState: LoadingState.INITIAL,
      currentMissingCommentsPage: null,
      loadedMissingCommentsPages: []
    });
  }

  public readonly setLatestMissing = this.updater((state: MissingState, latestMissing: MissingPerson[] | null) => ({
    ...state,
    latestMissing: latestMissing
  }));

  public readonly setCurrentMissingSearchPage = this.updater((state: MissingState, page: Page<MissingPerson>) => ({
    ...state,
    currentMissingSearchPage: page
  }));

  public readonly setCurrentMissingSearchFilter = this.updater((state: MissingState, searchFilter: MissingSearchFilter) => ({
    ...state,
    currentMissingSearchFilter: searchFilter
  }));

  public readonly setMissingSearchPageLoadingState = this.updater((state: MissingState, loadingState: LoadingState) => ({
    ...state,
    missingSearchPageLoadingState: loadingState
  }));

  public readonly setLatestMissingLoadingState = this.updater((state: MissingState, loadingState: LoadingState) => ({
    ...state,
    latestMissingLoadingState: loadingState
  }));

  public readonly setSelectedMissing = this.updater((state: MissingState, missingPerson: MissingPerson | null) => ({
    ...state,
    selectedMissing: missingPerson
  }));

  public readonly setSelectedMissingLoadingState = this.updater((state: MissingState, loadingState: LoadingState) => ({
    ...state,
    selectedMissingLoadingState: loadingState
  }));

  public readonly setMissingCommentsPageLoadingState = this.updater((state: MissingState, loadingState: LoadingState) => ({
    ...state,
    missingCommentsLoadingState: loadingState
  }));

  public readonly setMissingCommentsPageResult = this.updater((state: MissingState, page: Page<Comment> | null) => ({
    ...state,
    currentMissingCommentsPage: page,
    loadedMissingCommentsPages: page?.current?.index === 0
      ? [page] as Page<Comment>[]
      : [...state.loadedMissingCommentsPages, page] as Page<Comment>[]
  }));

  public resetSelectedMissingPerson = this.updater((state: MissingState) => ({
    ...state,
    selectedMissing: null,
    currentMissingCommentsPage: null,
    loadedMissingCommentsPages: []
  }));

  public readonly getLatestMissing = this.effect(() => {
    return this._missingService.getLatestMissing().pipe(
      take(1),
      tap(() => this.setLatestMissingLoadingState(LoadingState.LOADING)),
      tapResponse(
        offenders => {
          this.setLatestMissing(offenders);
          this.setLatestMissingLoadingState(LoadingState.LOADED)
        },
        (e: string) => this.setLatestMissingLoadingState(LoadingState.ERROR)
      ),
      catchError(() => EMPTY)
    );
  });

  public readonly searchMissing = this.effect((props$: Observable<{ searchFilter: MissingSearchFilter, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setMissingSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(({ searchFilter, pageRequest }) => {
        return this._missingService.searchMissing(searchFilter, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setCurrentMissingSearchPage(page);
              this.setMissingSearchPageLoadingState(LoadingState.LOADED);
            },
            (e: string) => this.setMissingSearchPageLoadingState(LoadingState.ERROR)
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
            offender => {
              this.setSelectedMissing(offender);
              this.setSelectedMissingLoadingState(LoadingState.LOADED);
            },
            (e: string) => this.setSelectedMissingLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });

  public readonly loadMissingPersonCommentsPage = this.effect((props$: Observable<{ missingId: string, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setMissingCommentsPageLoadingState(LoadingState.LOADING)),
      switchMap(({ missingId, pageRequest }) => {
        return this._missingService.loadCommentsForMissingPerson(missingId, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setMissingCommentsPageResult(page);
              this.setMissingCommentsPageLoadingState(LoadingState.LOADED)
            },
            (e: string) => this.setMissingCommentsPageLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
