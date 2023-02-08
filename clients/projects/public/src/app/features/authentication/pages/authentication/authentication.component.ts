import { Component, ChangeDetectionStrategy, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { NzModalService } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { AuthenticatedStatus } from '@vsp/core';
import { AuthenticationStore } from '@vsp/public/core/stores';

import { ForgotPasswordFormComponent } from '../../component/forgot-password-form/forgot-password-form.component';
import { LoginFormComponent } from '../../component/login-form/login-form.component';
import { RegistrationFormComponent } from '../../component/registration-form/registration-form.component';

@Component({
  selector: 'vsp-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ForgotPasswordFormComponent,
    NzGridModule,
    NzTabsModule,
    NzTypographyModule,
    LoginFormComponent,
    RegistrationFormComponent,
  ]
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  private readonly _authenticationStore: AuthenticationStore = inject(AuthenticationStore);
  private readonly _modalService: NzModalService = inject(NzModalService);
  private readonly _destroy$: Subject<any> = new Subject<any>();

  public selectedTabIndex: number = 0;

  ngOnInit(): void {
    this._listenForSignInUserResponseMessage();  
  }

  private _listenForSignInUserResponseMessage(): void {
    this._authenticationStore.authenticatedStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe(status => {
        if (status === AuthenticatedStatus.AUTHENTICATED) {
          this._modalService.closeAll();
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }  
}
