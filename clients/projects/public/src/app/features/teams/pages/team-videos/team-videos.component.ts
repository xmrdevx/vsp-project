import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { filter, Observable, take, withLatestFrom } from 'rxjs';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

import { 
  DataLayoutStyle, 
  defaultInfiniteScrollSettings, 
  DistanceUnit, 
  fadeAnimation, 
  InfiniteScrollSettings, 
  LoadingState, 
  Media, 
  Page, 
  PageRequest, 
  slideUpDownAnimation, 
  Team, 
  TeamVideosSearchFilter } from '@vsp/core';

import { 
  VideoGridComponent, 
  VideoGridSkeletonComponent, 
  VideoListComponent, 
  VideoListSkeletonComponent } from '@vsp/public/shared/videos';

import { TeamsProfileStore } from '../../store/teams-profile-store.service';
import { defaultTeamVideosSearchPageRequest } from '../../constants/teams-videos-search-filter.defaults';

import { TeamsVideosSearchFilterComponent } from '../../components/teams-videos-search-filter/teams-videos-search-filter.component';

@Component({
  selector: 'vsp-team-videos',
  templateUrl: './team-videos.component.html',
  styleUrls: ['./team-videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation, slideUpDownAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    InfiniteScrollModule,
    NgIf,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    ReactiveFormsModule,
    TeamsVideosSearchFilterComponent,
    VideoGridComponent,
    VideoGridSkeletonComponent,
    VideoListComponent,
    VideoListSkeletonComponent,
    ReactiveFormsModule,
  ]
})
export class TeamVideosComponent {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _teamsProfileStore: TeamsProfileStore = inject(TeamsProfileStore);

  public showAdvancedFilter: boolean = false;

  public selectedTeam$: Observable<Team | null> = this._teamsProfileStore.selectedTeam$;
  public videosSearchLayoutStyle$: Observable<DataLayoutStyle> = this._teamsProfileStore.videosSearchLayoutStyle$;
  public videosPageLoadingState$: Observable<LoadingState> = this._teamsProfileStore.videosPageLoadingState$;
  public currentVideosSearchPage$: Observable<Page<Media> | null> = this._teamsProfileStore.currentVideosSearchPage$;
  public loadedVideosPages$: Observable<Page<Media>[]> = this._teamsProfileStore.loadedVideosPages$;

  public videosSearchForm: UntypedFormGroup = this._formBuilder.group({
    searchKeywords: [null],
    startDate: [null],
    endDate: [null]
  });

  public LoadingState = LoadingState;
  public DataLayoutStyle = DataLayoutStyle;

  public defaultInfiniteScrollSettings: InfiniteScrollSettings = defaultInfiniteScrollSettings;

  constructor() {
    this._patchThroughCurrentVideosSearchFilter();
  }

  public resetVideosSearchFilter(): void {
    this._teamsProfileStore.resetCurrentVideosSearchFilter();
    this.videosSearchForm.reset();
  }

  public searchVideos(teamId: string, searchFilter: TeamVideosSearchFilter): void {
    this._searchVideos(teamId, searchFilter, defaultTeamVideosSearchPageRequest);
    this._teamsProfileStore.setCurrentVideosSearchFilter(searchFilter);
  }

  public changeVideoSearchLayoutStyle(style: DataLayoutStyle): void {
    this._teamsProfileStore.setVideosSearchLayoutStyle(style);
  }

  public onScrollDown(teamId: string, pageRequest: PageRequest | null): void {
    if (!pageRequest) return;
    this._searchVideos(teamId, this.videosSearchForm.value, pageRequest);
  }

  private _searchVideos(teamId: string, searchFilter: TeamVideosSearchFilter, pageRequest: PageRequest): void {
    this._teamsProfileStore.searchVideos({ 
      teamId: teamId,
      searchFilter: searchFilter, 
      pageRequest: pageRequest 
    });
  }

  private _patchThroughCurrentVideosSearchFilter(): void {
    this._teamsProfileStore.currentVideosSearchFilter$
      .pipe(
        take(1),
        withLatestFrom(
          this._teamsProfileStore.currentVideosSearchPage$,
          this._teamsProfileStore.selectedTeam$
        ),
        filter(([searchFilter, page, team]) => !!team)
      )
      .subscribe(([searchFilter, page, team]) => {
        const currentSearchPageRequest = page?.current ? page?.current : defaultTeamVideosSearchPageRequest;
        this.videosSearchForm.patchValue({ ...searchFilter });
        this._searchVideos(team?.id ?? '', searchFilter, currentSearchPageRequest);
      });
  }
}
