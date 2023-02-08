import { NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { fadeAnimation, LoadingState, MissingPerson } from '@vsp/core';

import { MissingPersonSimpleProfileComponent, MissingPersonSimpleProfileSkeletonComponent } from '@vsp/public/shared/missing-person';

@Component({
  selector: 'vsp-latest-missing-children-grid',
  templateUrl: './latest-missing-children-grid.component.html',
  styleUrls: ['./latest-missing-children-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    MissingPersonSimpleProfileComponent,
    MissingPersonSimpleProfileSkeletonComponent,
  ]
})
export class LatestMissingChildrenGridComponent {
  @Input()
  public loadingState: LoadingState | null = LoadingState.INITIAL;

  @Input()
  public missingChildren: MissingPerson[] | null =  null;

  public LoadingState = LoadingState;
}
