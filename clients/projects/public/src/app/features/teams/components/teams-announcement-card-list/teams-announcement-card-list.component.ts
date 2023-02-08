import { NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { FlattenPageCollectionPipe } from '@vsp/public/shared/pipes';
import { Page, TeamAnnouncement } from '@vsp/core';

import { TeamsAnnouncementCardComponent } from '../teams-announcement-card/teams-announcement-card.component';

@Component({
  selector: 'vsp-teams-announcement-card-list',
  templateUrl: './teams-announcement-card-list.component.html',
  styleUrls: ['./teams-announcement-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FlattenPageCollectionPipe,
    NgFor,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    TeamsAnnouncementCardComponent,
  ]
})
export class TeamsAnnouncementCardListComponent {
  @Input()
  public loadedPages: Page<TeamAnnouncement>[] | null = null; 
}
