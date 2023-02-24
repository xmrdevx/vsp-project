import { AsyncPipe, DatePipe, JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { fadeAnimation, Offender } from '@vsp/core';
import { OffenderSimpleProfileComponent } from '@vsp/offenders';

import { OffendersSelectors } from '../../store';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'vsp-offender-profile',
  templateUrl: './offender-profile.component.html',
  styleUrls: ['./offender-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    JsonPipe,
    NgIf,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzTypographyModule,
    RouterLink,
    OffenderSimpleProfileComponent
  ]
})
export class OffenderProfileComponent {
  private readonly _store: Store = inject(Store);

  public selectedOffender$: Observable<Offender | null> = 
    this._store.select(OffendersSelectors.selectSelectedOffender);
}
