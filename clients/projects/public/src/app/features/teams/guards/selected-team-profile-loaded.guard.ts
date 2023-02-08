import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { catchError, filter, Observable, of, switchMap, take, tap } from 'rxjs';

import { Team } from '@vsp/core';

import { TeamsProfileStore } from '../store/teams-profile-store.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedTeamProfileLoadedGuard implements CanActivate {
  private readonly _teamsProfileStore: TeamsProfileStore = inject(TeamsProfileStore);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const teamId: string = route.params['teamId'] || '';
    return this._getSelectedTeamProfileFromStoreOrApi(teamId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getSelectedTeamProfileFromStoreOrApi(teamId: string): Observable<Team | null> {
    return this._teamsProfileStore.selectedTeam$
      .pipe(
        tap(team => {
          if (!team) {
            this._teamsProfileStore.loadTeam({ teamId: teamId });
          }
        }),
        filter(team => !!team)
      )
  }
}
