import { NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { fadeAnimation, LoadingState, Offender } from '@vsp/core';

import { OffenderSimpleProfileComponent, OffenderSimpleProfileSkeletonComponent } from '@vsp/public/shared/offenders';

@Component({
  selector: 'vsp-latest-offenders-grid',
  templateUrl: './latest-offenders-grid.component.html',
  styleUrls: ['./latest-offenders-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    OffenderSimpleProfileComponent,
    OffenderSimpleProfileSkeletonComponent,
  ]
})
export class LatestOffendersGridComponent {
  @Input()
  public loadingState: LoadingState | null = LoadingState.INITIAL;

  @Input()
  public offenders: Offender[] | null =  null;

  public LoadingState = LoadingState;
}
