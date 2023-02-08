import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { cryptoBtc, cryptoEth } from '@ng-icons/cryptocurrency-icons';
import { simpleCashapp, simplePaypal } from '@ng-icons/simple-icons'

import { Team } from '@vsp/core';

@Component({
  selector: 'vsp-teams-simple-profile',
  templateUrl: './teams-simple-profile.component.html',
  styleUrls: ['./teams-simple-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NzAvatarModule,
    NzButtonModule,
    NzIconModule,
    NgIconComponent,
    RouterLink,
  ],
  providers: [
    provideIcons({
      cryptoBtc,
      cryptoEth,
      simpleCashapp,
      simplePaypal,
    })
  ]
})
export class TeamsSimpleProfileComponent {
  @Input()
  public team: Team | null = null;
}
