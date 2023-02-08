import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';

import { Comment, LoadingState, Media, MediaService, Page, PageRequest } from '@vsp/core';
import { catchError, EMPTY, Observable, switchMap, take, tap } from 'rxjs';

export interface WatchState {
  currentWatchVideo: Media | null,
  currentWatchVideoLoadingState: LoadingState,
  currentNearByPage: Page<Media> | null
  nearByPageLoadingState: LoadingState,
  loadedNearByPages: Page<Media>[],
  watchVideoCommentsLoadingState: LoadingState,
  currentWatchVideoCommentsPage: Page<Comment> | null,
  loadedWatchVideoCommentsPages: Page<Comment>[]
}

export const intialWatchState: WatchState = {
  currentWatchVideo: null,
  currentWatchVideoLoadingState: LoadingState.INITIAL,
  currentNearByPage: null,
  nearByPageLoadingState: LoadingState.INITIAL,
  loadedNearByPages: [],
  watchVideoCommentsLoadingState: LoadingState.INITIAL,
  currentWatchVideoCommentsPage: null,
  loadedWatchVideoCommentsPages: []
} as WatchState;

@Injectable({
  providedIn: 'root'
})
export class WatchStore extends ComponentStore<WatchState> {
  private readonly _mediaService: MediaService = inject(MediaService);

  public readonly currentWatchVideo$ = this.select(state => state.currentWatchVideo);
  public readonly currentWatchVideoLoadingState$ = this.select(state => state.currentWatchVideoLoadingState);
  public readonly currentNearByPage$ = this.select(state => state.currentNearByPage);
  public readonly nearByPageLoadingState$ = this.select(state => state.nearByPageLoadingState);
  public readonly loadedNearByPages$ = this.select(state => state.loadedNearByPages);
  public readonly watchVideoCommentsLoadingState$ = this.select(state => state.watchVideoCommentsLoadingState);
  public readonly currentWatchVideoCommentsPage$ = this.select(state => state.currentWatchVideoCommentsPage);
  public readonly loadedWatchVideoCommentsPages$ = this.select(state => state.loadedWatchVideoCommentsPages);
  
  constructor() {
    super({...intialWatchState});
  }

  public readonly setCurrentWatchVideo = this.updater((state: WatchState, video: Media | null) => ({
    ...state,
    currentWatchVideo: video
  }));

  public readonly setCurrentWatchVideoLoadingState = this.updater((state: WatchState, loadingState: LoadingState) => ({
    ...state,
    currentWatchVideoLoadingState: loadingState
  }));

  public readonly setNearByPageLoadingState = this.updater((state: WatchState, loadingState: LoadingState) => ({
    ...state,
    nearByPageLoadingState: loadingState
  }));

  public readonly setWatchVideoCommentsPageLoadingState = this.updater((state: WatchState, loadingState: LoadingState) => ({
    ...state,
    watchVideoCommentsLoadingState: loadingState
  }));

  public readonly setNearByPageResult = this.updater((state: WatchState, page: Page<Media> | null) => ({
    ...state,
    currentNearByPage: page,
    loadedNearByPages: page?.current?.index === 0
      ? [page] as Page<Media>[]
      : [...state.loadedNearByPages, page] as Page<Media>[]
  }));

  public resetNearByPageResults = this.updater((state: WatchState, page: Page<Media> | null) => ({
    ...state,
    currentNearByPage: page,
    loadedNearByPages: page ? [page] : []
  }));

  public resetWatchState = this.updater((state: WatchState) => ({
    ...intialWatchState
  }));


  public readonly setWatchVideoCommentsPageResult = this.updater((state: WatchState, page: Page<Comment> | null) => ({
    ...state,
    currentWatchVideoCommentsPage: page,
    loadedWatchVideoCommentsPages: page?.current?.index === 0
      ? [page] as Page<Comment>[]
      : [...state.loadedWatchVideoCommentsPages, page] as Page<Comment>[]
  }));

  public readonly loadWatchVideoDetails = this.effect((props$: Observable<string>) => {
    return props$.pipe(
      tap(() => this.setCurrentWatchVideoLoadingState(LoadingState.LOADING)),
      switchMap(videoId => {
        return this._mediaService.findOne(videoId).pipe(
          take(1),
          tapResponse(
            videoDetails => {
              this.setCurrentWatchVideo(videoDetails);
              this.setCurrentWatchVideoLoadingState(LoadingState.LOADED); 
            },
            (e: string) => this.setCurrentWatchVideoLoadingState(LoadingState.ERROR) 
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });
  
  public readonly loadNearByVideosPage = this.effect((props$: Observable<{ videoId: string, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setNearByPageLoadingState(LoadingState.LOADING)),
      switchMap(({ videoId, pageRequest }) => {
        return this._mediaService.loadNearByVideoMedia(videoId, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setNearByPageResult(page);
              this.setNearByPageLoadingState(LoadingState.LOADED)
            },
            (e: string) => this.setNearByPageLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });

  public readonly loadWatchVideoCommentsPage = this.effect((props$: Observable<{ videoId: string, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setWatchVideoCommentsPageLoadingState(LoadingState.LOADING)),
      switchMap(({ videoId, pageRequest }) => {
        return this._mediaService.loadCommentsForMedia(videoId, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setWatchVideoCommentsPageResult(page);
              this.setWatchVideoCommentsPageLoadingState(LoadingState.LOADED)
            },
            (e: string) => this.setWatchVideoCommentsPageLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });

}
