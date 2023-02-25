import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { OffenderCase, Page } from '@vsp/core';
import { FlattenPageCollectionPipe } from '@vsp/public/shared/pipes';

import { CaseSimpleProfileComponent } from '../case-simple-profile/case-simple-profile.component';

@Component({
  selector: 'vsp-cases-card-list',
  templateUrl: './cases-card-list.component.html',
  styleUrls: ['./cases-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CaseSimpleProfileComponent,
    FlattenPageCollectionPipe,
    NgFor,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
  ]
})
export class CasesCardListComponent {
  @Input()
  public loadedPages: Page<OffenderCase>[] | null = null;
}
