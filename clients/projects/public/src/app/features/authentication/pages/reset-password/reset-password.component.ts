import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

import { 
  fadeAnimation, 
  MatchValidators, 
  ResetPassword, 
  ResponseMessage, 
  ResponseStatus, 
  ValidationPatterns } from '@vsp/core';

import { AuthenticationStore } from '@vsp/public/core/stores';

@Component({
  selector: 'vsp-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NzAlertModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    ReactiveFormsModule,
  ]
})
export class ResetPasswordComponent implements OnDestroy {
  private readonly _store: AuthenticationStore = inject(AuthenticationStore);
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _route: ActivatedRoute = inject(ActivatedRoute);
  private readonly _router: Router = inject(Router);

  public resetPasswordForm: UntypedFormGroup = this._buildResetPasswordForm();

  public resetPasswordResponseMessage$: Observable<ResponseMessage | null> = this._store.resetPasswordResponseMessage$
    .pipe(tap(message => {
      if (message?.status === ResponseStatus.SUCCESS) {
        this.resetPasswordForm.reset();
        setTimeout(() => this._router.navigate(['/home']), 3000);
      }
    }));

  constructor() {
    this._route
      .queryParamMap
      .pipe(take(1))
      .subscribe((params: ParamMap) => {
        const resetToken: string = params.get('t') || '';
        const email: string = params.get('e') || ''

        if (resetToken?.length && email?.length) {
          // Patch query params to form
          this.resetPasswordForm.patchValue({ 
            resetToken: params.get('t') || '',
            email: params.get('e') || ''
          });
          // Clear query params
          // this._router.navigate([], { relativeTo: this._route, queryParams: {} });
        } else {
          // If no query params redirect to login
          this._router.navigate(['/home']);
        }
      });
  }

  public onResetPasswordRequest(request: ResetPassword): void {
    if (this.resetPasswordForm.invalid) return;
    this._store.resetPassword(request);
  }

  private _buildResetPasswordForm(): UntypedFormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(ValidationPatterns.password)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(ValidationPatterns.password)]],
      resetToken: ['', [Validators.required]]
    }, { 
      validators: MatchValidators.mustMatch('password', 'confirmPassword') 
    })
  }

  ngOnDestroy(): void {
    this._store.setResetPasswordResponseMessage(null);
  }
}
