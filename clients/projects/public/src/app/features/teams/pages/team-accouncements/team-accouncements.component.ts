import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, take, withLatestFrom } from 'rxjs';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { defaultInfiniteScrollSettings, fadeAnimation, InfiniteScrollSettings, LoadingState, Page, PageRequest, Team, TeamAnnouncement, TeamAnnouncementsSearchFilter } from '@vsp/core';

import { TeamsProfileStore } from '../../store/teams-profile-store.service';
import { defaultAnnouncementsSearchPageRequest } from '../../constants/team-announcements-search-filter.defaults';
import { TeamsAnnouncmentsSearchFilterComponent } from '../../components/teams-announcments-search-filter/teams-announcments-search-filter.component';
import { TeamsAnnouncementCardListComponent } from '../../components/teams-announcement-card-list/teams-announcement-card-list.component';
import { TeamsAnnouncementCardListSkeletonComponent } from '../../components/teams-announcement-card-list-skeleton/teams-announcement-card-list-skeleton.component';

@Component({
  selector: 'vsp-team-accouncements',
  templateUrl: './team-accouncements.component.html',
  styleUrls: ['./team-accouncements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    InfiniteScrollModule,
    NgIf,
    NzButtonModule,
    NzGridModule,
    ReactiveFormsModule,
    TeamsAnnouncementCardListComponent,
    TeamsAnnouncementCardListSkeletonComponent,
    TeamsAnnouncmentsSearchFilterComponent,
  ]
})
export class TeamAccouncementsComponent {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _teamsProfileStore: TeamsProfileStore = inject(TeamsProfileStore);

  public selectedTeam$: Observable<Team | null> = this._teamsProfileStore.selectedTeam$;
  public announcementsPageLoadingState$: Observable<LoadingState> = this._teamsProfileStore.announcementsPageLoadingState$;
  public currentAnnouncementsSearchPage$: Observable<Page<TeamAnnouncement> | null> = this._teamsProfileStore.currentAnnouncementsSearchPage$;
  public loadedAnnouncementsPages$: Observable<Page<TeamAnnouncement>[]> = this._teamsProfileStore.loadedAnnouncementsPages$;
  
  public announcementsSearchForm: UntypedFormGroup = this._formBuilder.group({
    searchKeywords: [null],
    startDate: [null],
    endDate: [null]
  });

  public defaultInfiniteScrollSettings: InfiniteScrollSettings = defaultInfiniteScrollSettings;

  constructor() {
    this._patchThroughCurrentAnnouncementsSearchFilter();
  }

  public searchAnnouncements(team: Team | null, searchFilter: TeamAnnouncementsSearchFilter): void {
    if (team?.id) {
      this._searchAnnouncements(team.id, searchFilter, defaultAnnouncementsSearchPageRequest)
    }
  }

  public resetAnnouncementsSearchFilter(): void {
    this._teamsProfileStore.resetCurrentAnnouncementsSearchFilter();
  }

  public onScrollDownAnnouncements(team: Team | null, pageRequest: PageRequest | null): void {
    if (!pageRequest || !team) return;
    this._teamsProfileStore.searchAnnouncements({ 
      teamId: team.id, 
      searchFilter: this.announcementsSearchForm.value,
      pageRequest: pageRequest
    });
  }

  private _searchAnnouncements(teamId: string, searchFilter: TeamAnnouncementsSearchFilter, pageRequest: PageRequest): void {
    this._teamsProfileStore.searchAnnouncements({
      teamId: teamId,
      searchFilter: searchFilter,
      pageRequest: pageRequest
    })
  }

  private _patchThroughCurrentAnnouncementsSearchFilter(): void {
    this._teamsProfileStore.currentVideosSearchFilter$
      .pipe(
        take(1),
        withLatestFrom(
          this._teamsProfileStore.currentAnnouncementsSearchPage$,
          this._teamsProfileStore.selectedTeam$
        )   
      )
      .subscribe(([searchFilter, page, team]) => {  
        const currentSearchPageRequest = page?.current ? page?.current : defaultAnnouncementsSearchPageRequest;
        if (team?.id) {
          this._searchAnnouncements(team.id, searchFilter, currentSearchPageRequest);
        }
      });
  }
}
