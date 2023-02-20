import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, filter, Observable, of, switchMap, take, tap } from 'rxjs';

import { Claim } from '@vsp/core';
import { PermissionsSelectors, PermissionsActions } from '@vsp/admin/store/permissions'

@Injectable({
  providedIn: 'root'
})
export class AvailablePermissionsLoadedGuard implements CanActivate {
  private readonly _store: Store = inject(Store);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._getAvailablePermissionsFromStoreOrApi()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getAvailablePermissionsFromStoreOrApi(): Observable<Claim[] | null> {
    return this._store
      .select(PermissionsSelectors.selectAssignablePermissions)
      .pipe(
        tap(permission => {
          if (!permission) {
            this._store.dispatch(PermissionsActions.getAssignablePermissionsRequest())
          }
        }),
        filter(permissions => !!permissions),
        take(1)
      )
  }
}
