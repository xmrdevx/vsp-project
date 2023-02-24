import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeAnimation } from '@vsp/core';

@Component({
  selector: 'vsp-offenders-create',
  templateUrl: './offenders-create.component.html',
  styleUrls: ['./offenders-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [

  ]
})
export class OffendersCreateComponent {

}
