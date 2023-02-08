import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-missing-person-simple-profile-skeleton',
  templateUrl: './missing-person-simple-profile-skeleton.component.html',
  styleUrls: ['./missing-person-simple-profile-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzSkeletonModule,
  ]
})
export class MissingPersonSimpleProfileSkeletonComponent { }
