import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-offender-simple-profile-skeleton',
  templateUrl: './offender-simple-profile-skeleton.component.html',
  styleUrls: ['./offender-simple-profile-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzSkeletonModule
  ]
})
export class OffenderSimpleProfileSkeletonComponent { }
