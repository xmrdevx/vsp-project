import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { AddressSearchControlComponent } from '@vsp/addresses';
import { Address, GeocodingLocation, ResponseStatus } from '@vsp/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { OffenderAddressFormComponent } from '../../components/offender-address-form/offender-address-form.component';
import { buildOffenderAddressFormGroup } from '../../components/offender-address-form/offender-address-form.builder';
import { Store } from '@ngrx/store';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OffendersActions, OffendersSelectors } from '../../store';
import { filter, take } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'vsp-offender-address-create',
  templateUrl: './offender-address-create.component.html',
  styleUrls: ['./offender-address-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AddressSearchControlComponent,
    NgIf,
    NgTemplateOutlet,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    NzTypographyModule,
    OffenderAddressFormComponent,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class OffenderAddressCreateComponent {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _messageService: NzMessageService = inject(NzMessageService);
  private readonly _store: Store = inject(Store);
  private readonly _modalRef: NzModalRef = inject(NzModalRef);

  @Input()
  public isModal: boolean = false;

  @Input()
  public offenderId: string | null = null;

  public createOffenderAddressForm: UntypedFormGroup = buildOffenderAddressFormGroup(this._formBuilder);

  public createOffenderAddress(address: Address, shouldRedirect: boolean): void {
    if (!this.offenderId || this.createOffenderAddressForm.invalid) return;
    this._handleCreateOffenderAddressResponse(shouldRedirect);
    this._store.dispatch(
      OffendersActions.createOffenderAddressRequest({ 
        offenderId: this.offenderId, 
        address: address 
      })
    );
  }

  private _handleCreateOffenderAddressResponse(shouldRedirect: boolean): void {
    this._store
      .select(OffendersSelectors.selectCreateOffenderAddressResponseMessage)
      .pipe(filter(message => !!message), take(1))
      .subscribe(message => {
        // Show response message in toast
        if (message?.status === ResponseStatus.SUCCESS) {
          this._messageService.success(message?.message);
        } else {
          this._messageService.error(message?.message || 'Error creating address');
        }

        // Clear response message
        this._store.dispatch(OffendersActions.setCreateOffenderAddressResponseMessage({ message: null }));

        // Reset form
        this._resetCreateOffenderAddressForm();

        // Redirect if should
        if (shouldRedirect) {
          this._modalRef?.close();
        }
      });
  }

  private _resetCreateOffenderAddressForm(): void {
    this.createOffenderAddressForm.reset();

    // Reset address search
  }
}
