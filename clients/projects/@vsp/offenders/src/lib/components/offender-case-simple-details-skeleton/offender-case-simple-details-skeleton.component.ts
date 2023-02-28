import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-offender-case-simple-details-skeleton',
  templateUrl: './offender-case-simple-details-skeleton.component.html',
  styleUrls: ['./offender-case-simple-details-skeleton.component.scss'],
  standalone: true,
  imports: [
    NzCardModule,
    NzSkeletonModule
  ]
})
export class OffenderCaseSimpleDetailsSkeletonComponent {

}
