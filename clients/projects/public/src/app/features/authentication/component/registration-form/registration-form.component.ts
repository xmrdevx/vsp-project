import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { 
  EnvironmentService, 
  MatchValidators, 
  ResponseMessage, 
  ResponseStatus, 
  ValidationPatterns,
  RegistrationUser } from '@vsp/core';

import { UserAsyncValidators } from '@vsp/public/core/validators';
import { UserStore } from '@vsp/public/core/stores';

import { AbstractAuthenticationTabContentComponent } from '../abstract-authentication-tab-content/abstract-authentication-tab-content.component';

interface RegistrationFormValue {
  user: RegistrationUser
};

@Component({
  selector: 'vsp-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NzAlertModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    ReactiveFormsModule,
  ]
})
export class RegistrationFormComponent extends AbstractAuthenticationTabContentComponent implements OnInit, OnDestroy {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _userStore: UserStore = inject(UserStore);
  private readonly _userAsyncValidators: UserAsyncValidators = inject(UserAsyncValidators);
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _destroy$: Subject<any> = new Subject<any>();

  public registrationForm: UntypedFormGroup = this._formBuilder.group({
    user: this._formBuilder.group({
      email: [null, [
        Validators.required, 
        Validators.email
      ], [
        this._userAsyncValidators.validateEmail()
      ]],
      userName: ['', [
        Validators.required,
        Validators.pattern(ValidationPatterns.numbersAndCharactersOnly),
        Validators.minLength(6)
      ],[
        this._userAsyncValidators.validateUserName()
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(ValidationPatterns.password)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(ValidationPatterns.password)
      ]],
      profile: this._formBuilder.group({
        firstName: [null, [
          Validators.required
        ]],
        lastName: [null, [
          Validators.required
        ]],
      }),
      // recaptcha: ['', Validators.required]
    }, { 
      validators: MatchValidators.mustMatch('password', 'confirmPassword') 
    })
  });

  public registerUserResponseMessage$: Observable<ResponseMessage | null> = this._userStore.registerUserResponseMessage$;
  
  ngOnInit(): void {
    this._listenForRegisterUserResponseMessage();
  }

  public get profileFormGroup(): UntypedFormGroup {
    return this.registrationForm.get('user')?.get('profile') as UntypedFormGroup;
  }

  public get userFormGroup(): UntypedFormGroup {
    return this.registrationForm.get('user') as UntypedFormGroup;
  }

  public registerAccount(registrationFormValue: RegistrationFormValue): void {
    if (this.registrationForm.invalid) return;
    this._userStore.registerUser(registrationFormValue.user);
  }

  public get recaptchaSiteKey(): string {
    return this._environmentService.getSection('recaptcha')?.siteKey || '';
  }

  private _listenForRegisterUserResponseMessage(): void {
    this._userStore.registerUserResponseMessage$
      .pipe(takeUntil(this._destroy$))
      .subscribe(message => {
        if (message?.status === ResponseStatus.SUCCESS) {
          this.userFormGroup.reset();
          setTimeout(() => {
            this._userStore.setRegisterUserResponseMessage(null);
            this.selectedIndexChange.emit(0);
          }, 2000);
        }
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
