import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable, take, withLatestFrom } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { 
  Case,
  defaultInfiniteScrollSettings, 
  fadeAnimation, 
  InfiniteScrollSettings, 
  LoadingState, 
  Page, 
  PageRequest, 
  Team, 
  CasesSearchFilter } from '@vsp/core';

import { CasesCardListComponent } from '@vsp/public/shared/cases/components/cases-card-list/cases-card-list.component';
import { CasesCardListSkeletonComponent } from '@vsp/public/shared/cases/components/cases-card-list-skeleton/cases-card-list-skeleton.component';

import { defaultAnnouncementsSearchPageRequest } from '../../constants/team-announcements-search-filter.defaults';
import { TeamsProfileStore } from '../../store/teams-profile-store.service';
import { defaultTeamCasesSearchPageRequest } from '../../constants/team-cases-search-filter.defaults';
import { TeamsCasesSearchFilterComponent } from '../../components/teams-cases-search-filter/teams-cases-search-filter.component';

@Component({
  selector: 'vsp-team-cases',
  templateUrl: './team-cases.component.html',
  styleUrls: ['./team-cases.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    CasesCardListComponent,
    CasesCardListSkeletonComponent,
    InfiniteScrollModule,
    NgFor,
    NgIf,
    NzButtonModule,
    NzGridModule,
    ReactiveFormsModule,
    TeamsCasesSearchFilterComponent,
  ]
})
export class TeamCasesComponent {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _teamsProfileStore: TeamsProfileStore = inject(TeamsProfileStore);

  public selectedTeam$: Observable<Team | null> = this._teamsProfileStore.selectedTeam$;
  public casesPageLoadingState$: Observable<LoadingState> = this._teamsProfileStore.casesPageLoadingState$;
  public currentCasesSearchPage$: Observable<Page<Case> | null> = this._teamsProfileStore.currentCasesSearchPage$;
  public loadedCasesPages$: Observable<Page<Case>[]> = this._teamsProfileStore.loadedCasesPages$;
  
  public casesSearchForm: UntypedFormGroup = this._formBuilder.group({
    searchKeywords: [null],
    startDate: [null],
    endDate: [null]
  });

  public defaultInfiniteScrollSettings: InfiniteScrollSettings = defaultInfiniteScrollSettings;

  constructor() {
    this._patchThroughCurrentCasesSearchFilter();
  }

  public searchCases(team: Team | null, searchFilter: CasesSearchFilter): void {
    if (team?.id) {
      this._searchCases(team.id, searchFilter, defaultAnnouncementsSearchPageRequest)
    }
  }

  public resetCasesSearchFilter(): void {
    this._teamsProfileStore.resetCurrentCasesSearchFilter();
  }

  public onScrollDownCases(team: Team | null, pageRequest: PageRequest | null): void {
    if (!pageRequest || !team) return;
    this._teamsProfileStore.searchCases({ 
      teamId: team.id, 
      searchFilter: this.casesSearchForm.value,
      pageRequest: pageRequest
    });
  }

  private _searchCases(teamId: string, searchFilter: CasesSearchFilter, pageRequest: PageRequest): void {
    this._teamsProfileStore.searchCases({
      teamId: teamId,
      searchFilter: searchFilter,
      pageRequest: pageRequest
    })
  }

  private _patchThroughCurrentCasesSearchFilter(): void {
    this._teamsProfileStore.currentCasesSearchFilter$
      .pipe(
        take(1),
        withLatestFrom(
          this._teamsProfileStore.currentCasesSearchPage$,
          this._teamsProfileStore.selectedTeam$
        )   
      )
      .subscribe(([searchFilter, page, team]) => {  
        const currentSearchPageRequest = page?.current ? page?.current : defaultTeamCasesSearchPageRequest;
        if (team?.id) {
          this._searchCases(team.id, searchFilter, currentSearchPageRequest);
        }
      });
  }
}
