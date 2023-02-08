import { NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { CaseSimpleProfileSkeletonComponent } from '../case-simple-profile-skeleton/case-simple-profile-skeleton.component';

@Component({
  selector: 'vsp-cases-card-list-skeleton',
  templateUrl: './cases-card-list-skeleton.component.html',
  styleUrls: ['./cases-card-list-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CaseSimpleProfileSkeletonComponent,
    NgFor,
    NzGridModule,
    NzSkeletonModule,
  ]
})
export class CasesCardListSkeletonComponent { }
