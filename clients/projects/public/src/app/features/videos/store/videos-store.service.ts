import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';

import { LoadingState, Page, Media, VideosSearchFilter, PageRequest, MediaService, DataLayoutStyle } from '@vsp/core';
import { catchError, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { defaultVideosSearchFilter } from '../constants/videos-search-filter.defaults';

export interface VideosState {
  videosSearchLayoutStyle: DataLayoutStyle,
  currentVideosSearchFilter: VideosSearchFilter,
  videosPageLoadingState: LoadingState,
  currentVideosSearchPage: Page<Media> | null,
  loadedVideoPages: Page<Media>[]
}

@Injectable({
  providedIn: 'root'
})
export class VideosStore extends ComponentStore<VideosState> {
  private readonly _mediaService: MediaService = inject(MediaService);

  public readonly videosSearchLayoutStyle$ = this.select(state => state.videosSearchLayoutStyle);
  public readonly videosPageLoadingState$ = this.select(state => state.videosPageLoadingState);
  public readonly currentVideosSearchFilter$ = this.select(state => state.currentVideosSearchFilter);
  public readonly currentVideosSearchPage$ = this.select(state => state.currentVideosSearchPage);
  public readonly loadedVideosPages$ = this.select(state => state.loadedVideoPages);
  
  constructor() {
    super({
      videosSearchLayoutStyle: DataLayoutStyle.Grid,
      currentVideosSearchFilter: defaultVideosSearchFilter,
      videosPageLoadingState: LoadingState.INITIAL,
      currentVideosSearchPage: null,  
      loadedVideoPages: []
    });
  }

  public readonly setSearchVideosPageResults = this.updater((state: VideosState, page: Page<Media> | null) => ({
      ...state,
      currentVideosSearchPage: page,
      loadedVideoPages: page?.current?.index === 0 
        ? [page] as Page<Media>[]
        : [...state.loadedVideoPages, page] as Page<Media>[]
    }));

  public readonly setCurrentVideosSearchFilter = this.updater((state: VideosState, searchFilter: VideosSearchFilter) => ({
    ...state,
    currentVideosSearchFilter: searchFilter
  }));

  // @TODO might have to issue new search request after resetting here...
  public readonly resetCurrentVideosSearchFilter = this.updater((state: VideosState) => ({
    ...state,
    currentVideosSearchFilter: defaultVideosSearchFilter
  }));

  public readonly setVideosSearchPageLoadingState = this.updater((state: VideosState, loadingState: LoadingState) => ({
    ...state,
    videosPageLoadingState: loadingState
  }));

  public readonly setVideosSearchLayoutStyle = this.updater((state: VideosState, style: DataLayoutStyle) => ({
    ...state,
    videosSearchLayoutStyle: style
  }));

  public readonly searchVideos = this.effect((props$: Observable<{ searchFilter: VideosSearchFilter, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setVideosSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(({ searchFilter, pageRequest }) => {
        return this._mediaService.searchVideoMedia(searchFilter, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setSearchVideosPageResults(page);
              this.setVideosSearchPageLoadingState(LoadingState.LOADED)
            },
            (e: string) => this.setVideosSearchPageLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
