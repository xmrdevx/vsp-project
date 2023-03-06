import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { GeocodingLocation } from '@vsp/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AddressSearchControlComponent } from 'projects/@vsp/addresses/src/public-api';

@Component({
  selector: 'vsp-offender-address-form',
  templateUrl: './offender-address-form.component.html',
  styleUrls: ['./offender-address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AddressSearchControlComponent,
    NgIf,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
  ]
})
export class OffenderAddressFormComponent implements OnInit {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);
  private readonly _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  public offenderAddressForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.offenderAddressForm = this._controlContainer.control as UntypedFormGroup;
  }

  public onSelectedLocationChange(location: GeocodingLocation): void {
    this.offenderAddressForm.patchValue({ ...location.address });
    this._changeDetectorRef.markForCheck();
  }
}
