import { DatePipe, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { EllipsisPipe } from '@vsp/public/shared/pipes';
import { Offender } from '@vsp/core';


@Component({
  selector: 'vsp-offender-simple-profile',
  templateUrl: './offender-simple-profile.component.html',
  styleUrls: ['./offender-simple-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DatePipe,
    EllipsisPipe,
    NgIf,
    NzAvatarModule,
    NzButtonModule,
    NzIconModule,
    RouterLink,
  ]
})
export class OffenderSimpleProfileComponent {
  @HostBinding('class')
  public hostClasses: string = 'flex flex-column align-items-top w-100'

  @Input()
  public offender: Offender | null = null;

  @Input()
  public includeProfileLinks: boolean = true;

  public get offenderRouterLink(): string[] {
    return ['/offenders', this.offender?.id || '', 'profile'];
  }
}
