import { NgClass, NgFor, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Address } from '@vsp/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AddressDetailsComponent } from '../address-details/address-details.component';

@Component({
  selector: 'vsp-address-details-list',
  templateUrl: './address-details-list.component.html',
  styleUrls: ['./address-details-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AddressDetailsComponent,
    NgClass,
    NgFor,
    NgStyle,
    NzCollapseModule,
    NzTypographyModule,
  ]
})
export class AddressDetailsListComponent {
  @Input()
  public addresses: Address[] | null | undefined = [];

  @Input()
  public maxHeight: number | null | undefined = null;

  public formatAddress(address: Address): string {
    return address ? `${address.street} ${address.city}, ${address.state} ${address.zip}` : '';
  }
}
