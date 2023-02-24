import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeAnimation } from '@vsp/core';

@Component({
  selector: 'vsp-offender-cases-create',
  templateUrl: './offender-cases-create.component.html',
  styleUrls: ['./offender-cases-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [

  ]
})
export class OffenderCasesCreateComponent {

}
