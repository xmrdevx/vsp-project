import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Address } from '@vsp/core';

@Component({
  selector: 'vsp-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [

  ]
})
export class AddressDetailsComponent {
  @Input()
  public address: Address | null | undefined = null;
}
