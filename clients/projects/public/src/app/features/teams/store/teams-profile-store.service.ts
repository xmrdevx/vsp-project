import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { ComponentStore, tapResponse } from '@ngrx/component-store';

import { 
  Case, 
  CasesSearchFilter, 
  DataLayoutStyle, 
  LoadingState, 
  Media, 
  MediaService, 
  Page, 
  PageRequest, 
  Team, 
  TeamAnnouncement, 
  TeamAnnouncementsSearchFilter, 
  TeamsService, 
  TeamVideosSearchFilter } from '@vsp/core';

import { defaultTeamsVideosSearchFilter } from '../constants/teams-videos-search-filter.defaults';
import { defaultTeamAnnouncementsSearchFilter } from '../constants/team-announcements-search-filter.defaults';
import { defaultTeamCasesSearchFilter } from '../constants/team-cases-search-filter.defaults';

export interface TeamsProfileState {
  // Profile State,
  selectedTeamLoadingState: LoadingState,
  selectedTeam: Team | null

  // Videos State
  videosSearchLayoutStyle: DataLayoutStyle,
  currentVideosSearchFilter: TeamVideosSearchFilter,
  videosPageLoadingState: LoadingState,
  currentVideosSearchPage: Page<Media> | null,
  loadedVideoPages: Page<Media>[],
  
  // Announcements State
  currentAnnouncementsSearchFilter: TeamAnnouncementsSearchFilter,
  announcementsPageLoadingState: LoadingState,
  currentAnnouncementsSearchPage: Page<TeamAnnouncement> | null,
  loadedAnnouncementsPages: Page<TeamAnnouncement>[],

  // Cases State
  currentCasesSearchFilter: CasesSearchFilter,
  casesPageLoadingState: LoadingState,
  currentCasesSearchPage: Page<Case> | null,
  loadedCasesPages: Page<Case>[],
}

export const initialTeamsProfileState: TeamsProfileState = {
  // Profile State
  selectedTeamLoadingState: LoadingState.INITIAL,
  selectedTeam: null,

  // Videos State
  videosSearchLayoutStyle: DataLayoutStyle.Grid,
  currentVideosSearchFilter: defaultTeamsVideosSearchFilter,
  videosPageLoadingState: LoadingState.INITIAL,
  currentVideosSearchPage: null,  
  loadedVideoPages: [],

  // Announcements State
  currentAnnouncementsSearchFilter: defaultTeamAnnouncementsSearchFilter,
  announcementsPageLoadingState: LoadingState.INITIAL,
  currentAnnouncementsSearchPage: null,
  loadedAnnouncementsPages: [],

  // Cases State
  currentCasesSearchFilter: defaultTeamCasesSearchFilter,
  casesPageLoadingState: LoadingState.INITIAL,
  currentCasesSearchPage: null,
  loadedCasesPages: [],
} as TeamsProfileState;

@Injectable({
  providedIn: 'root'
})
export class TeamsProfileStore extends ComponentStore<TeamsProfileState> {
  private readonly _mediaService: MediaService = inject(MediaService);
  private readonly _teamsService: TeamsService = inject(TeamsService);

  // Profile State
  public readonly selectedTeamLoadingState$ = this.select(state => state.selectedTeamLoadingState);
  public readonly selectedTeam$ = this.select(state => state.selectedTeam);

  // Video State
  public readonly videosSearchLayoutStyle$ = this.select(state => state.videosSearchLayoutStyle);
  public readonly videosPageLoadingState$ = this.select(state => state.videosPageLoadingState);
  public readonly currentVideosSearchFilter$ = this.select(state => state.currentVideosSearchFilter);
  public readonly currentVideosSearchPage$ = this.select(state => state.currentVideosSearchPage);
  public readonly loadedVideosPages$ = this.select(state => state.loadedVideoPages);

  // Announements State
  public readonly announcementsPageLoadingState$ = this.select(state => state.announcementsPageLoadingState);
  public readonly currentAnnouncementsSearchFilter$ = this.select(state => state.currentAnnouncementsSearchFilter);
  public readonly currentAnnouncementsSearchPage$ = this.select(state => state.currentAnnouncementsSearchPage);
  public readonly loadedAnnouncementsPages$ = this.select(state => state.loadedAnnouncementsPages);

  // Cases State
  public readonly casesPageLoadingState$ = this.select(state => state.casesPageLoadingState);
  public readonly currentCasesSearchFilter$ = this.select(state => state.currentCasesSearchFilter);
  public readonly currentCasesSearchPage$ = this.select(state => state.currentCasesSearchPage);
  public readonly loadedCasesPages$ = this.select(state => state.loadedCasesPages);

  constructor() {
    super({ ...initialTeamsProfileState })
  }

  // Profile State
  public readonly setSelectedTeamLoadingState = this.updater((state: TeamsProfileState, loadingState: LoadingState) => ({
    ...state,
    selectedTeamLoadingState: loadingState
  }));

  public readonly setSelectedTeam = this.updater((state: TeamsProfileState, team: Team | null) => ({
    ...state,
    selectedTeam: team
  }));

  public readonly loadTeam = this.effect((props$: Observable<{ teamId: string}>) => {
    return props$.pipe(
      tap(() => this.setSelectedTeamLoadingState(LoadingState.LOADING)),
      switchMap(({ teamId }) => {
        return this._teamsService.findOne(teamId).pipe(
          take(1),
          tapResponse(
            team => {
              this.setSelectedTeam(team);
              this.setSelectedTeamLoadingState(LoadingState.LOADED);
            },
            (e: string) => this.setSelectedTeamLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        )
      })
    )
  });

  // Video State
  public readonly resetTeamsProfileState = this.updater((state:  TeamsProfileState) => ({
    ...initialTeamsProfileState
  }));
  
  public readonly setSearchVideosPageResults = this.updater((state: TeamsProfileState, page: Page<Media> | null) => ({
      ...state,
      currentVideosSearchPage: page,
      loadedVideoPages: page?.current?.index === 0 
        ? [page] as Page<Media>[]
        : [...state.loadedVideoPages, page] as Page<Media>[]
    }));

  public readonly setCurrentVideosSearchFilter = this.updater((state: TeamsProfileState, searchFilter: TeamVideosSearchFilter) => ({
    ...state,
    currentVideosSearchFilter: searchFilter
  }));

  // @TODO might have to issue new search request after resetting here...
  public readonly resetCurrentVideosSearchFilter = this.updater((state: TeamsProfileState) => ({
    ...state,
    currentVideosSearchFilter: defaultTeamsVideosSearchFilter
  }));

  public readonly setVideosSearchPageLoadingState = this.updater((state: TeamsProfileState, loadingState: LoadingState) => ({
    ...state,
    videosPageLoadingState: loadingState
  }));

  public readonly setVideosSearchLayoutStyle = this.updater((state: TeamsProfileState, style: DataLayoutStyle) => ({
    ...state,
    videosSearchLayoutStyle: style
  }));

  public readonly searchVideos = this.effect((props$: Observable<{ teamId: string, searchFilter: TeamVideosSearchFilter, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setVideosSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(({ teamId, searchFilter, pageRequest }) => {
        return this._teamsService.searchVideos(teamId, searchFilter, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setSearchVideosPageResults(page);
              this.setVideosSearchPageLoadingState(LoadingState.LOADED)
            },
            (e: string) => this.setVideosSearchPageLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });


  // Announcements State
  public readonly setSearchAnnouncementsPageResults = this.updater((state: TeamsProfileState, page: Page<TeamAnnouncement> | null) => ({
      ...state,
      currentAnnouncementsSearchPage: page,
      loadedAnnouncementsPages: page?.current?.index === 0 
        ? [page] as Page<TeamAnnouncement>[]
        : [...state.loadedAnnouncementsPages, page] as Page<TeamAnnouncement>[]
    }));

  public readonly setCurrentAnnouncementsSearchFilter = this.updater((state: TeamsProfileState, searchFilter: TeamAnnouncementsSearchFilter) => ({
    ...state,
    currentAnnouncementsSearchFilter: searchFilter
  }));

  // @TODO might have to issue new search request after resetting here...
  public readonly resetCurrentAnnouncementsSearchFilter = this.updater((state: TeamsProfileState) => ({
    ...state,
    currentAnnouncementsSearchFilter: defaultTeamAnnouncementsSearchFilter
  }));

  public readonly setAnnouncementsSearchPageLoadingState = this.updater((state: TeamsProfileState, loadingState: LoadingState) => ({
    ...state,
    announcementsPageLoadingState: loadingState
  }));

  public readonly searchAnnouncements = this.effect((props$: Observable<{ teamId: string, searchFilter: TeamAnnouncementsSearchFilter, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setAnnouncementsSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(({ teamId, searchFilter, pageRequest }) => {
        return this._teamsService.searchAnnouncements(teamId, searchFilter, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setSearchAnnouncementsPageResults(page);
              this.setAnnouncementsSearchPageLoadingState(LoadingState.LOADED)
            },
            (e: string) => this.setAnnouncementsSearchPageLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });


  // Cases State
  public readonly setSearchCasesPageResults = this.updater((state: TeamsProfileState, page: Page<Case> | null) => ({
      ...state,
      currentCasesSearchPage: page,
      loadedCasesPages: page?.current?.index === 0 
        ? [page] as Page<Case>[]
        : [...state.loadedCasesPages, page] as Page<Case>[]
    }));

  public readonly setCurrentCasesSearchFilter = this.updater((state: TeamsProfileState, searchFilter: CasesSearchFilter) => ({
    ...state,
    currentCasesSearchFilter: searchFilter
  }));

  // @TODO might have to issue new search request after resetting here...
  public readonly resetCurrentCasesSearchFilter = this.updater((state: TeamsProfileState) => ({
    ...state,
    currentCasesSearchFilter: defaultTeamCasesSearchFilter
  }));

  public readonly setCasesSearchPageLoadingState = this.updater((state: TeamsProfileState, loadingState: LoadingState) => ({
    ...state,
    casesPageLoadingState: loadingState
  }));

  public readonly searchCases = this.effect((props$: Observable<{ teamId: string, searchFilter: CasesSearchFilter, pageRequest: PageRequest }>) => {
    return props$.pipe(
      tap(() => this.setCasesSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(({ teamId, searchFilter, pageRequest }) => {
        return this._teamsService.searchCases(teamId, searchFilter, pageRequest).pipe(
          take(1),
          tapResponse(
            page => {
              this.setSearchCasesPageResults(page);
              this.setCasesSearchPageLoadingState(LoadingState.LOADED)
            },
            (e: string) => this.setCasesSearchPageLoadingState(LoadingState.ERROR)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
