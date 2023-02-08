import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-case-simple-profile-skeleton',
  templateUrl: './case-simple-profile-skeleton.component.html',
  styleUrls: ['./case-simple-profile-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzCardModule,
    NzSkeletonModule
  ]
})
export class CaseSimpleProfileSkeletonComponent { }
