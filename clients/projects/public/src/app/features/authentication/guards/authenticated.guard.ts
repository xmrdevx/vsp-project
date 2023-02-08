import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, Observable, of, switchMap, take } from 'rxjs';

import { AuthenticatedStatus } from '@vsp/core';

import { AuthenticationStore } from '../../../core/stores/authentication-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  private readonly _router: Router = inject(Router);
  private readonly _authenticationStore: AuthenticationStore = inject(AuthenticationStore);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._authenticationStore.authenticatedStatus$
      .pipe(
        switchMap((authenticatedStatus: AuthenticatedStatus | null) => {
          if (authenticatedStatus !== AuthenticatedStatus.AUTHENTICATED) {
            this._router.navigateByUrl('/error/unauthorized');
            return of(false);
          }
          return of(true);
        }),
        catchError(() => of(false)) 
      )
  }
}
