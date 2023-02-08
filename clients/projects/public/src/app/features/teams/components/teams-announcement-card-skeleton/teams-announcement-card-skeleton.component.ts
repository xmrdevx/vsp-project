import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-teams-announcement-card-skeleton',
  templateUrl: './teams-announcement-card-skeleton.component.html',
  styleUrls: ['./teams-announcement-card-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzCardModule,
    NzSkeletonModule,
  ]
})
export class TeamsAnnouncementCardSkeletonComponent { }
