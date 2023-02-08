import { Component, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { fadeAnimation, LoadingState, TabNavigationLink, Team } from '@vsp/core';
import { TeamsSimpleProfileSkeletonComponent } from '../../components/teams-simple-profile-skeleton/teams-simple-profile-skeleton.component';
import { TeamsSimpleProfileComponent } from '../../components/teams-simple-profile/teams-simple-profile.component';
import { TeamsProfileStore } from '../../store/teams-profile-store.service';
import { defaultTeamProfileTabLinks } from './team-profile-tab-links.defaults';

@Component({
  selector: 'vsp-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    NzCardModule,
    NzGridModule,
    NzTabsModule,
    TeamsSimpleProfileComponent,
    TeamsSimpleProfileSkeletonComponent,
    RouterLink,
    RouterOutlet,
  ]
})
export class TeamProfileComponent implements OnDestroy {
  private readonly _teamsStore: TeamsProfileStore = inject(TeamsProfileStore);

  public LoadingState = LoadingState;
  public defaultTeamProfileTabLinks: TabNavigationLink[] = defaultTeamProfileTabLinks;

  public selectedTeamLoadingState$: Observable<LoadingState> = this._teamsStore.selectedTeamLoadingState$;
  public selectedTeam$: Observable<Team | null> = this._teamsStore.selectedTeam$;

  // TEMP
  public tabs: number[] = [1, 2, 3];
  
  ngOnDestroy(): void {
    this._teamsStore.setSelectedTeam(null); 
  }
}
