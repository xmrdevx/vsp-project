import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeAnimation } from '@vsp/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'vsp-offender-cases-details',
  templateUrl: './offender-cases-details.component.html',
  styleUrls: ['./offender-cases-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NzButtonModule,
    NzCardModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzTypographyModule,
  ]
})
export class OffenderCasesDetailsComponent {

}
