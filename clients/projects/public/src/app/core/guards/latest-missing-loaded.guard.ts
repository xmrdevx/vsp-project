import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of, switchMap, take, tap } from 'rxjs';

import { MissingPerson } from '@vsp/core';

import { MissingStore } from '../stores/missing-store.service';

@Injectable({
  providedIn: 'root'
})
export class LatestMissingLoadedGuard implements CanActivate {
  private readonly _missingStore: MissingStore = inject(MissingStore);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._getLatestMissingFromStoreOrApi()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  private _getLatestMissingFromStoreOrApi(): Observable<MissingPerson[] | null> {
    return this._missingStore
      .latestMissing$
      .pipe(
        tap(missing => {
          if (!missing) {
            this._missingStore.getLatestMissing();
          }
        }),
        // filter(missing => !!missing),
        take(1)
      );
  }
}
