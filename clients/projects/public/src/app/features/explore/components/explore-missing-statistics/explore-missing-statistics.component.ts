import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import { MissingPerson } from '@vsp/core';

@Component({
  selector: 'vsp-explore-missing-statistics',
  templateUrl: './explore-missing-statistics.component.html',
  styleUrls: ['./explore-missing-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NzCardModule,
    NzGridModule,
    NzStatisticModule,
  ]
})
export class ExploreMissingStatisticsComponent {
  @Input()
  public missingPeople: MissingPerson[] | null = null;
}
