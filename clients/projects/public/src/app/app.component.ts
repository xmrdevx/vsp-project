import { Component, ChangeDetectionStrategy, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe, isPlatformBrowser, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { AuthenticatedStatus, AuthenticatedUser, NavigationLink } from '@vsp/core';
import { AuthenticationStore, UserStore } from './core/stores';

import { defaultAccountNavigationMenu, defaultLeftNavigationMenu, defaultRightNavigationMenu } from './constants/navigation-menu.defaults';
import { AuthenticationComponent } from './features/authentication/pages/authentication/authentication.component';


@Component({
  selector: 'vsp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    NgIf,
    NgFor,
    NgTemplateOutlet,
    FormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzDropDownModule,
    NzModalModule,
    NzAvatarModule,
  ]
})
export class AppComponent implements OnDestroy {
  private readonly _platformId: Object = inject(PLATFORM_ID);
  private readonly _router: Router = inject(Router);
  private readonly _modalService: NzModalService = inject(NzModalService);
  private readonly _authenticationStore: AuthenticationStore = inject(AuthenticationStore);
  private readonly _userStore: UserStore = inject(UserStore);

  public static isBrowser: Subject<boolean> = new Subject<boolean>();

  private _destroy$: Subject<any> = new Subject<any>();

  public defaultLeftNavigationMenu: NavigationLink[] = defaultLeftNavigationMenu;
  public defaultRightNavigationMenu: NavigationLink[] = defaultRightNavigationMenu;
  public defaultAccountNavigationMenu: NavigationLink[] = defaultAccountNavigationMenu;
  
  public defaultNavigationMenuAll: NavigationLink[] = [
    ...defaultLeftNavigationMenu, 
    ...defaultRightNavigationMenu
  ];

  public authenticatedStatus$: Observable<AuthenticatedStatus | null> = this._authenticationStore.authenticatedStatus$;
  public AuthenticatedStatus = AuthenticatedStatus;

  public userSettings$: Observable<any | null> = this._userStore.userSettings$;;

  constructor() {
    // @Note - This is for server side rendering.  It is also used by Caching Service
    // to determine when we're in the browser and have access to the browser APIs
    AppComponent.isBrowser.next(isPlatformBrowser(this._platformId));
    this._listenForAuthenticatedUserChanges();
  }

  public showAuthenicationModal(): void {
    this._modalService.create({
      nzContent: AuthenticationComponent,
      nzFooter: null,
      nzWidth: 450
    });
  }

  public signOutUser(): void {
    this._authenticationStore.signOutUser();
    this._router.navigateByUrl('/home');
  }

  private _listenForAuthenticatedUserChanges(): void {
    this._authenticationStore.authenticatedUser$
      .pipe(takeUntil(this._destroy$))
      .subscribe((authenticatedUser: AuthenticatedUser | null) => {
        if (authenticatedUser?.status === AuthenticatedStatus.AUTHENTICATED) {
          this._userStore.getUserSettings();
        } else {
          this._userStore.resetUserState();
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
