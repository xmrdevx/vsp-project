import { AsyncPipe, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable, take, tap } from 'rxjs';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { 
  ForgotPassword, 
  publicClientIdentifier, 
  ResponseMessage, 
  ResponseStatus } from '@vsp/core';

import { AuthenticationStore } from '@vsp/public/core/stores/authentication-store.service';

import { AbstractAuthenticationTabContentComponent } from '../abstract-authentication-tab-content/abstract-authentication-tab-content.component';

@Component({
  selector: 'vsp-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NzAlertModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
  ]
})
export class ForgotPasswordFormComponent extends AbstractAuthenticationTabContentComponent implements OnDestroy {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _store: AuthenticationStore = inject(AuthenticationStore);

  public forgotPasswordResponseMessage$: Observable<ResponseMessage | null> = this._store.passwordResetRequestResponseMessage$
    .pipe(tap(message => {
      if (message?.status === ResponseStatus.SUCCESS) {
        this.forgotPasswordForm.reset();
      }
    }));
  
  public forgotPasswordForm: UntypedFormGroup = this._formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    client: [publicClientIdentifier, [Validators.required]]
  });
  

  public resetPassword(request: ForgotPassword): void {
    if (this.forgotPasswordForm.invalid) return;
    this._store.forgotPassword(request);
  }

  ngOnDestroy(): void {
    this._store.setPasswordResetRequestResponseMessage(null);
  }
}
