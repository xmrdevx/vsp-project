import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { OffenderCase, Page } from '@vsp/core';
import { FlattenPageCollectionPipe } from '@vsp/pipes';

import { OffenderCaseSimpleProfileComponent } from '../offender-case-simple-profile/offender-case-simple-profile.component';

@Component({
  selector: 'vsp-offender-cases-card-list',
  templateUrl: './offender-cases-card-list.component.html',
  styleUrls: ['./offender-cases-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    OffenderCaseSimpleProfileComponent,
    FlattenPageCollectionPipe,
    NgFor,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
  ]
})
export class OffenderCasesCardListComponent {
  @Input()
  public loadedPages: Page<OffenderCase>[] | null = null;
}
