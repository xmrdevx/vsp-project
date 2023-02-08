import { AsyncPipe, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnDestroy, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';

import { LoadingState, MissingPerson } from '@vsp/core';

import { 
  MissingPersonSimpleProfileComponent, 
  MissingPersonSimpleProfileSkeletonComponent } from '@vsp/public/shared/missing-person';

import { ExploreStore } from '../../stores/explore-store.service';

@Component({
  selector: 'vsp-explore-missing-dialog-content',
  templateUrl: './explore-missing-dialog-content.component.html',
  styleUrls: ['./explore-missing-dialog-content.component.scss'],
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
    MissingPersonSimpleProfileComponent,
    MissingPersonSimpleProfileSkeletonComponent,
  ]
})
export class ExploreMissingDialogContentComponent implements OnDestroy {
  private readonly _exploreStore: ExploreStore = inject(ExploreStore);

  @Input()
  public set missingId(missingId: string | null) {
    if (missingId) {
      this._exploreStore.findMissingById(missingId);
    } else {
      this._exploreStore.setSelectedMissing(null);
    }
  }

  public LoadingState = LoadingState;

  public selectedMissingLoadingState$: Observable<LoadingState> = this._exploreStore.selectedMissingLoadingState$;
  public selectedMissing$: Observable<MissingPerson | null> = this._exploreStore.selectedMissing$;

  ngOnDestroy(): void {
    this._exploreStore.resetSelectedMissing();
  }
}
