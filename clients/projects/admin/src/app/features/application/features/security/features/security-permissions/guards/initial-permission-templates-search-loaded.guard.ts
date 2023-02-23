import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, combineLatest, filter, mergeMap, Observable, of, switchMap, take, tap } from 'rxjs';

import { defaultBasicQuerySearchFilter, defaultPageRequest } from '@vsp/admin/core/constants';
import { Page, PermissionTemplate } from '@vsp/core';

import { defaultSecurityPermissionsSort } from '../constants/sort.defaults';
import { SecurityPermissionsActions, SecurityPermissionsSelectors } from '../store';

@Injectable({
  providedIn: 'root'
})
export class InitialPermissionTemplatesSearchLoadedGuard implements CanActivate {
  private _store: Store = inject(Store);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._getPermissionTemplatesPageFromStoreOrApi()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getPermissionTemplatesPageFromStoreOrApi(): Observable<Page<PermissionTemplate> | null> {
    return combineLatest([
        this._store.select(SecurityPermissionsSelectors.selectPermissionTemplatesSearchFilter),
        this._store.select(SecurityPermissionsSelectors.selectPermissionTemplatesPage)
      ])
      .pipe(tap(([filter, page]) => {
        if (!page) {
          this._store.dispatch(SecurityPermissionsActions.searchPermissionTemplatesRequest({
            filter: filter || defaultBasicQuerySearchFilter,
            pageRequest: {
              ...defaultPageRequest,
              sort: {
                ...defaultSecurityPermissionsSort
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
