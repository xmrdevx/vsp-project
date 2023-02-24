import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeAnimation } from '@vsp/core';

@Component({
  selector: 'vsp-offender-cases-update',
  templateUrl: './offender-cases-update.component.html',
  styleUrls: ['./offender-cases-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [

  ]
})
export class OffenderCasesUpdateComponent {

}
