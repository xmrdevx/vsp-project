import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { fadeAnimation } from '@vsp/core';

@Component({
  selector: 'vsp-offenders-create',
  templateUrl: './offenders-create.component.html',
  styleUrls: ['./offenders-create.component.scss'],
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
    ReactiveFormsModule,
  ]
})
export class OffendersCreateComponent {

}
