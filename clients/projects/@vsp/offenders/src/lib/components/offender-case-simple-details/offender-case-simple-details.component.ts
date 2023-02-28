import { DatePipe, NgIf, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseStatus, OffenderCase } from '@vsp/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'vsp-offender-case-simple-details',
  templateUrl: './offender-case-simple-details.component.html',
  styleUrls: ['./offender-case-simple-details.component.scss'],
  standalone: true,
  imports: [
    DatePipe,
    NgIf,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzIconModule,
    NzTagModule,
    RouterLink,
    TitleCasePipe,
  ]
})
export class OffenderCaseSimpleDetailsComponent {
  @Input()
  public case: OffenderCase | null | undefined = null;

  public get offenderRouterLink(): string[] {
    return ['/offenders', this.case?.offender?.id || '', 'profile'];
  }

  public get statusBadgeColor(): string {
    switch (this.case?.status) {
      case CaseStatus.NEW:           return 'success';
      case CaseStatus.INVESTIGATING: return 'processing';
      case CaseStatus.OPEN:          return 'error';
      case CaseStatus.CLOSED:        return 'success';
      default:                       return 'error';
    }
  }
}
