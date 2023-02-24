import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, combineLatest, filter, mergeMap, Observable, of, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { defaultBasicQuerySearchFilter, defaultPageRequest } from '@vsp/admin/core/constants';
import { Offender, Page } from '@vsp/core';

import { defaultOffendersSort } from '../constants/sort.defaults';
import { OffendersActions, OffendersSelectors } from '../store';

@Injectable({
  providedIn: 'root'
})
export class InitialOffendersSearchLoadedGuard implements CanActivate {
  private _store: Store = inject(Store);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._getOffendersPageFromStoreOrApi()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getOffendersPageFromStoreOrApi(): Observable<Page<Offender> | null> {
    return combineLatest([
        this._store.select(OffendersSelectors.selectOffendersSearchFilter),
        this._store.select(OffendersSelectors.selectOffendersPage)
      ])
      .pipe(tap(([filter, page]) => {
        if (!page) {
          this._store.dispatch(OffendersActions.searchOffendersRequest({
            filter: filter || defaultBasicQuerySearchFilter,
            pageRequest: {
              ...defaultPageRequest,
              sort: {
                ...defaultOffendersSort
              }
            }
          }));
        }
      }),
      filter(([filter, page]) => !!page),
      mergeMap(([filter, page]) => of(page)),
      take(1));
  }
}
