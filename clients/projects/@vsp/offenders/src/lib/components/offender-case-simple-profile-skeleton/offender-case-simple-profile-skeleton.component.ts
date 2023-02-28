import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-offender-case-simple-profile-skeleton',
  templateUrl: './offender-case-simple-profile-skeleton.component.html',
  styleUrls: ['./offender-case-simple-profile-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzCardModule,
    NzSkeletonModule
  ]
})
export class OffenderCaseSimpleProfileSkeletonComponent { }
