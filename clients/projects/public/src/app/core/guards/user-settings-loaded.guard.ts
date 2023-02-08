import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsLoadedGuard implements CanActivate {
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // return this._getUserSettingsFromStoreOrApi()
      return of(true);
      // .pipe(
      //   switchMap(() => of(true)),
      //   catchError(() => of(false))
      // );
  }
  
  // private _getUserSettingsFromStoreOrApi(): Observable<UserSettings | null> {
  //   return this._store.select(fromUser.selectUserSettings)
  //     .pipe(
  //       tap(settings => {
  //         if (!settings) {
  //           this._store.dispatch(fromUser.getUserSettingsRequest());
  //         }
  //       }),
  //       filter(settings => !!settings),
  //       take(1)
  //     );
  // }
}
