import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Team, LoadingState, TeamsService } from '@vsp/core';
import { catchError, EMPTY, Observable, switchMap, take, tap } from 'rxjs';

export interface TeamsState {
  teamsLoadingState: LoadingState,
  teams: Team[] | null,
}

@Injectable({
  providedIn: 'root'
})
export class TeamsStore extends ComponentStore<TeamsState> {
  private readonly _teamsService: TeamsService = inject(TeamsService);

  public readonly teamsLoadingState$ = this.select(state => state.teamsLoadingState);
  public readonly teams$ = this.select(state => state.teams);

  constructor() {
    super({
      teamsLoadingState: LoadingState.INITIAL,
      teams: null
    });
  }

  public readonly setTeamsLoadingState = this.updater((state: TeamsState, loadingState: LoadingState) => ({
    ...state,
    teamsLoadingState: loadingState
  }));

  public readonly setTeams = this.updater((state: TeamsState, teams: Team[] | null) => ({
    ...state,
    teams: teams
  }));

  public readonly loadAllTeams = this.effect(() => {
    this.setTeamsLoadingState(LoadingState.LOADING);
    return this._teamsService.findAll().pipe(
      take(1),
      tapResponse(
        teams => {
          this.setTeams(teams);
          this.setTeamsLoadingState(LoadingState.LOADED)
        },
        (e: string) => this.setTeamsLoadingState(LoadingState.ERROR)
      ),
      catchError(() => EMPTY)
    );
  });
}
