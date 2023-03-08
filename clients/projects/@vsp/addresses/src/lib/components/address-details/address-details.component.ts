import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
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
  @HostBinding('class')
  public hostClasses: string = 'block w-100';

  @Input()
  public address: Address | null | undefined = null;
}
