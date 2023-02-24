import { Component, ChangeDetectionStrategy, Input, OnDestroy, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { LoadingState, Offender } from '@vsp/core';
import { OffenderSimpleProfileComponent, OffenderSimpleProfileSkeletonComponent } from '@vsp/offenders';

import { ExploreStore } from '../../stores/explore-store.service';

@Component({
  selector: 'vsp-explore-offender-dialog-content',
  templateUrl: './explore-offender-dialog-content.component.html',
  styleUrls: ['./explore-offender-dialog-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    NzPageHeaderModule,
    NzTypographyModule,
    OffenderSimpleProfileComponent,
    OffenderSimpleProfileSkeletonComponent,
  ]
})
export class ExploreOffenderDialogContentComponent implements OnDestroy {
  private readonly _exploreStore: ExploreStore = inject(ExploreStore);

  @Input()
  public set offenderId(offenderId: string | null) {
    if (offenderId) {
      this._exploreStore.findOffenderById(offenderId);
    } else {
      this._exploreStore.setSelectedOffender(null);
    }
  }

  public LoadingState = LoadingState;

  public selectedOffenderLoadingState$: Observable<LoadingState> = this._exploreStore.selectedOffenderLoadingState$;
  public selectedOffender$: Observable<Offender | null> = this._exploreStore.selectedOffender$;

  ngOnDestroy(): void {
    this._exploreStore.resetSelectedOffender();
  }
}
