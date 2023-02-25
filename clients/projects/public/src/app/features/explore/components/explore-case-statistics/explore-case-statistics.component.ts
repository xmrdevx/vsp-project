import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import { OffenderCase, CaseStatus } from '@vsp/core';

@Component({
  selector: 'vsp-explore-case-statistics',
  templateUrl: './explore-case-statistics.component.html',
  styleUrls: ['./explore-case-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NzCardModule,
    NzGridModule,
    NzStatisticModule,
  ]
})
export class ExploreCaseStatisticsComponent {
  @Input()
  public cases: OffenderCase[] | null = null;
  
  public get totalCases(): number {
    return this.cases?.length || 0;
  }

  public get closedCases(): number {
    return this.cases?.filter(c => c.status === CaseStatus.CLOSED).length || 0;
  }

  public get openCases(): number {
    return this.cases?.filter(c => c.status === CaseStatus.OPEN).length || 0;
  }
}
