import { NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { OffenderCaseSimpleProfileSkeletonComponent } from '../offender-case-simple-profile-skeleton/offender-case-simple-profile-skeleton.component';

@Component({
  selector: 'vsp-offender-cases-card-list-skeleton',
  templateUrl: './offender-cases-card-list-skeleton.component.html',
  styleUrls: ['./offender-cases-card-list-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    OffenderCaseSimpleProfileSkeletonComponent,
    NgFor,
    NzGridModule,
    NzSkeletonModule,
  ]
})
export class OffenderCasesCardListSkeletonComponent { }
