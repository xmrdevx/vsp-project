import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { catchError, filter, Observable, of, switchMap, take, tap } from 'rxjs';

import { Offender } from '@vsp/core';
import { OffendersStore } from '../stores';

@Injectable({
  providedIn: 'root'
})
export class LatestOffendersLoadedGuard implements CanActivate {
  private readonly _offendersStore: OffendersStore = inject(OffendersStore);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._getLatestOffendersFromStoreOrApi()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  private _getLatestOffendersFromStoreOrApi(): Observable<Offender[] | null> {
    return this._offendersStore
      .latestOffenders$
      .pipe(
        tap(offenders => {
          if (!offenders) {
            this._offendersStore.getLatestOffenders();
          }
        }),
        // filter(offenders => !!offenders),
        take(1)
      );
  }
}
