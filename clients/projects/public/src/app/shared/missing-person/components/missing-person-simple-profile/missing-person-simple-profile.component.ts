import { DatePipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgePipe, EllipsisPipe } from '@vsp/public/shared/pipes';

import { MissingPerson } from '@vsp/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'vsp-missing-person-simple-profile',
  templateUrl: './missing-person-simple-profile.component.html',
  styleUrls: ['./missing-person-simple-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AgePipe,
    DatePipe,
    EllipsisPipe,
    NgFor,
    NgIf,
    NzAvatarModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    RouterLink,
    TitleCasePipe,
  ]
})
export class MissingPersonSimpleProfileComponent {
  @HostBinding('class')
  public hostClasses: string = 'flex flex-column align-items-top w-100'

  @Input()
  public missingPerson: MissingPerson | null = null;

  @Input()
  public includeProfileLinks: boolean = true;

  @Input()
  public includeSummary: boolean = true;

  public get missingRouterLink(): string[] {
    return ['/missing', this.missingPerson?.id || '', 'profile'];
  }
}
