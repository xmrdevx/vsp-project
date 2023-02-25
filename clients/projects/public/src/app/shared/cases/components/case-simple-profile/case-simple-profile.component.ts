import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { OffenderCase } from '@vsp/core';

@Component({
  selector: 'vsp-case-simple-profile',
  templateUrl: './case-simple-profile.component.html',
  styleUrls: ['./case-simple-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DatePipe,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    RouterLink,
    TitleCasePipe,
  ]
})
export class CaseSimpleProfileComponent {
  @Input()
  public case: OffenderCase | null = null;

  public get offenderRouterLink(): string[] {
    return ['/offenders', this.case?.offender?.id || '', 'profile'];
  }
}
