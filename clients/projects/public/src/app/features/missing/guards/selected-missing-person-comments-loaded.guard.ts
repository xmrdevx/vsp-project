import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';

import { MissingPerson } from '@vsp/core';

import { MissingStore } from '@vsp/public/core/stores';
import { defaultMissingPersonCommentsPageRequest } from '../constants/missing-person-comment-search-filter.defaults';

@Injectable({
  providedIn: 'root'
})
export class SelectedMissingPersonCommentsLoadedGuard implements CanActivate {
  constructor(
    private _missingStore: MissingStore
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const missingId: string = route.params['missingId'] || '';
    return this._getSelectedMissingPersonFromStoreOrApi(missingId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getSelectedMissingPersonFromStoreOrApi(missingId: string): Observable<MissingPerson | null> {
    return this._missingStore.selectedMissing$
      .pipe(
        withLatestFrom(
          this._missingStore.currentMissingCommentsPage$
        ),
        tap(([currentMissing, currentMissingCommentsPage]) => {
          if (!currentMissing) {
            this._missingStore.findMissingById(missingId)
          }
          
          if (!currentMissingCommentsPage) {
            this._missingStore.loadMissingPersonCommentsPage({ missingId: missingId, pageRequest: defaultMissingPersonCommentsPageRequest });
          }
        }),
        // filter(([currentWatchVideo, currentNearByPage, currentWatchVideoCommentsPage]) => !!currentWatchVideo),
        map(([currentMissing, currentMissingCommentsPage]) => currentMissing)
      )
  }
}
