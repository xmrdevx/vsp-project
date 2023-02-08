import { NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { TeamsAnnouncementCardSkeletonComponent } from '../teams-announcement-card-skeleton/teams-announcement-card-skeleton.component';

@Component({
  selector: 'vsp-teams-announcement-card-list-skeleton',
  templateUrl: './teams-announcement-card-list-skeleton.component.html',
  styleUrls: ['./teams-announcement-card-list-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NzGridModule,
    TeamsAnnouncementCardSkeletonComponent,
  ]
})
export class TeamsAnnouncementCardListSkeletonComponent { }
