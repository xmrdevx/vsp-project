import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, filter, Observable, of, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { Offender } from '@vsp/core';

import { OffendersActions, OffendersSelectors } from '../store';

@Injectable({
  providedIn: 'root'
})
export class SelectedOffenderLoadedGuard implements CanActivate {
  private _store: Store = inject(Store);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const offenderId: string = route.params['offenderId'] || '';
    return this._getSelectedOffenderFromStoreOrApi(offenderId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getSelectedOffenderFromStoreOrApi(offenderId: string): Observable<Offender | null> {
    return this._store.select(OffendersSelectors.selectSelectedOffender)
      .pipe(
        tap(offender => {
          if (!offender || offender.id !== offenderId) {
            this._store.dispatch(
              OffendersActions.getOffenderByIdRequest({ 
                offenderId: offenderId 
              })
            );
          }
        }),
        filter((offender: Offender | null) => !!offender && offender.id === offenderId),
        take(1)
      );
  }
}
