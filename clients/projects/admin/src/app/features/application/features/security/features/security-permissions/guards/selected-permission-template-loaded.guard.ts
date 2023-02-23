import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, filter, Observable, of, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { PermissionTemplate } from '@vsp/core';

import { SecurityPermissionsActions, SecurityPermissionsSelectors } from '../store';

@Injectable({
  providedIn: 'root'
})
export class SelectedPermissionTemplateLoadedGuard implements CanActivate {
  private _store: Store = inject(Store);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const templateId: string = route.params['templateId'] || '';
    return this._getSelectedPermissionTemplateFromStoreOrApi(templateId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getSelectedPermissionTemplateFromStoreOrApi(templateId: string): Observable<PermissionTemplate| null> {
    return this._store.select(SecurityPermissionsSelectors.selectSelectedPermissionTemplate)
      .pipe(
        tap(template => {
          if (!template) {
            this._store.dispatch(
              SecurityPermissionsActions.getPermissionTemplateByIdRequest({ 
                templateId: templateId 
              })
            );
          }
        }),
        filter(template => !!template),
        take(1)
      );
  }
}
