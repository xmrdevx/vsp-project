import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, filter, Observable, of, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { PermissionTemplate } from '@vsp/core';

import { PermissionsActions, PermissionsSelectors } from '@vsp/admin/store/permissions';

@Injectable({
  providedIn: 'root'
})
export class PermissionTemplatesLoadedGuard implements CanActivate {
  private readonly _store: Store = inject(Store);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._getPermissionTemplatesFromStoreOrApi()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getPermissionTemplatesFromStoreOrApi(): Observable<PermissionTemplate[] | null> {
    return this._store
      .select(PermissionsSelectors.selectPermissionTemplates)
      .pipe(
        tap(permissionTemplates => {
          if (!permissionTemplates) {
            this._store.dispatch(PermissionsActions.getPermissionTemplatesRequest())
          }
        }),
        filter(permissionTemplates => !!permissionTemplates),
        take(1)
      )
  }
}
