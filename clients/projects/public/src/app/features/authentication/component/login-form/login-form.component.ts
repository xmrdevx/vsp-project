import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { Credentials, publicClientIdentifier, ResponseMessage, RoleTypes } from '@vsp/core';

import { UserStore } from '@vsp/public/core/stores';
import { AuthenticationStore } from '@vsp/public/core/stores/authentication-store.service';
import { AbstractAuthenticationTabContentComponent } from '../abstract-authentication-tab-content/abstract-authentication-tab-content.component';
import { ForgotPasswordFormComponent } from '../forgot-password-form/forgot-password-form.component';

@Component({
  selector: 'vsp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    ForgotPasswordFormComponent,
    NgIf,
    NzAlertModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzTypographyModule,
    ReactiveFormsModule,
  ]
})
export class LoginFormComponent extends AbstractAuthenticationTabContentComponent {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _authenticationStore: AuthenticationStore = inject(AuthenticationStore);
  private readonly _userStore: UserStore = inject(UserStore);

  public loginForm: UntypedFormGroup = this._formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false],
    clientId: [publicClientIdentifier, [Validators.required]]
  });

  public signInResponseMessage$: Observable<ResponseMessage<void> | null> = this._authenticationStore.signInResponseMessage$;
  
  public login(credentials: Credentials):void {
    if (this.loginForm.invalid) return;
    this._authenticationStore.signInUser(credentials);
  }
}
