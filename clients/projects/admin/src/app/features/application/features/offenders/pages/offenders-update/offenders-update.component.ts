import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeAnimation } from '@vsp/core';

@Component({
  selector: 'vsp-offenders-update',
  templateUrl: './offenders-update.component.html',
  styleUrls: ['./offenders-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [

  ]
})
export class OffendersUpdateComponent {

}
