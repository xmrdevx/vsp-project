import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Link, ResponseStatus } from '@vsp/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { filter, take } from 'rxjs';

import { buildLinkForm, defaultLinkFormValue } from '../../components/offender-link-form/offender-link-form.builder';
import { OffenderLinkFormComponent } from '../../components/offender-link-form/offender-link-form.component';
import { OffendersActions, OffendersSelectors } from '../../store';

@Component({
  selector: 'vsp-offender-link-create',
  templateUrl: './offender-link-create.component.html',
  styleUrls: ['./offender-link-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    NzTypographyModule,
    OffenderLinkFormComponent,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class OffenderLinkCreateComponent {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _messageService: NzMessageService = inject(NzMessageService);
  private readonly _store: Store = inject(Store);
  private readonly _modalRef: NzModalRef = inject(NzModalRef);

  @Input()
  public isModal: boolean = false;

  @Input()
  public offenderId: string | null = null;

  public createOffenderLinkForm: UntypedFormGroup = buildLinkForm(this._formBuilder);

  public createOffenderLink(link: Link, shouldRedirect: boolean): void {
    if (!this.offenderId || this.createOffenderLinkForm.invalid) return;
    this._handleCreateLinkResponse(shouldRedirect);
    this._store.dispatch(
      OffendersActions.createOffenderLinkRequest({ 
        offenderId: this.offenderId, 
        link: link 
      })
    );
  }

  private _handleCreateLinkResponse(shouldRedirect: boolean): void {
    this._store
      .select(OffendersSelectors.selectCreateOffenderLinkResponseMessage)
      .pipe(filter(message => !!message), take(1))
      .subscribe(message => {
        // Show response message in toast
        if (message?.status === ResponseStatus.SUCCESS) {
          this._messageService.success(message?.message);
        } else {
          this._messageService.error(message?.message || 'Error creating address');
        }

        // Clear response message
        this._store.dispatch(OffendersActions.setCreateOffenderLinkResponseMessage({ message: null }));

        // Reset form
        this._resetCreateLinkForm();

        // Redirect if should
        if (shouldRedirect) {
          this._modalRef?.close();
        }
      });
  }

  private _resetCreateLinkForm(): void {
    this.createOffenderLinkForm.reset();
    this.createOffenderLinkForm.patchValue({ ...defaultLinkFormValue });
  }
}
