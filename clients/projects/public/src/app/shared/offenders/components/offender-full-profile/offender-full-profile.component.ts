import { DatePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { EllipsisPipe } from '@vsp/public/shared/pipes';
import { Offender } from '@vsp/core';

@Component({
  selector: 'vsp-offender-full-profile',
  templateUrl: './offender-full-profile.component.html',
  styleUrls: ['./offender-full-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DatePipe,
    EllipsisPipe,
    NzAvatarModule,
    RouterLink,
  ]
})
export class OffenderFullProfileComponent {
  @Input()
  public offender: Offender | null = null;

  public get offenderRouterLink(): string[] {
    return ['/offenders', this.offender?.id || '', 'profile'];
  }
}
