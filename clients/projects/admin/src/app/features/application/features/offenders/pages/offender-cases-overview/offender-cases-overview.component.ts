import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeAnimation } from '@vsp/core';

@Component({
  selector: 'vsp-offender-cases-overview',
  templateUrl: './offender-cases-overview.component.html',
  styleUrls: ['./offender-cases-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [

  ]
})
export class OffenderCasesOverviewComponent {

}
