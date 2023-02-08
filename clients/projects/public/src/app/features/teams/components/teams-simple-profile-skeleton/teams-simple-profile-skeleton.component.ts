import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-teams-simple-profile-skeleton',
  templateUrl: './teams-simple-profile-skeleton.component.html',
  styleUrls: ['./teams-simple-profile-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzSkeletonModule
  ]
})
export class TeamsSimpleProfileSkeletonComponent { }
