import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, filter, map, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';

import { Media } from '@vsp/core';

import { WatchStore } from '../store/watch-store.service';
import { defaultNearBySearchPageRequest } from '../constants/near-by-search-filter.defaults';
import { defaultWatchVideoCommentsPageRequest } from '../constants/watch-video-coments-search-filter.defaults';

@Injectable({
  providedIn: 'root'
})
export class SelectedWatchVideoLoadedGuard implements CanActivate {
  private readonly _watchStore: WatchStore = inject(WatchStore);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const videoId: string = route.queryParams['vid'] || '';
    return this._getSelectedWatchVideoFromStoreOrApi(videoId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getSelectedWatchVideoFromStoreOrApi(videoId: string): Observable<Media | null> {
    return this._watchStore.currentWatchVideo$
      .pipe(
        withLatestFrom(
          this._watchStore.currentNearByPage$,
          this._watchStore.currentWatchVideoCommentsPage$
        ),
        tap(([currentWatchVideo, currentNearByPage, currentWatchVideoCommentsPage]) => {
          if (!currentWatchVideo) {
            this._watchStore.loadWatchVideoDetails(videoId);
          }

          if (!currentNearByPage) {
            this._watchStore.loadNearByVideosPage({ videoId: videoId, pageRequest: defaultNearBySearchPageRequest })
          }

          if (!currentWatchVideoCommentsPage) {
            this._watchStore.loadWatchVideoCommentsPage({ videoId: videoId, pageRequest: defaultWatchVideoCommentsPageRequest });
          }
        }),
        // filter(([currentWatchVideo, currentNearByPage, currentWatchVideoCommentsPage]) => !!currentWatchVideo),
        map(([currentWatchVideo, currentNearByPage, currentWatchVideoCommentsPage]) => currentWatchVideo)
      )
  }
}
