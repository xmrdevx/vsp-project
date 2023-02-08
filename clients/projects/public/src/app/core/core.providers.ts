import { APP_INITIALIZER, makeEnvironmentProviders, PLATFORM_ID } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';

// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './interceptors';

import { AuthenticationService } from './services';
import { AuthenticationStore } from './stores/authentication-store.service';
import { authenticatedUserInitializer } from './initializers/authenticated-user.initializer';

import { ssrWindowFactory } from '@vsp/public/browser-dependencies.ssr';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

import { 
  ArrowLeftOutline,
  ArrowRightOutline,
  ContactsOutline,
  DashboardOutline,
  FolderViewOutline,
  GlobalOutline,
  HomeOutline,
  IdcardOutline,
  LoginOutline,
  MailOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  LockOutline,
  PoweroffOutline,
  SettingOutline,
  TeamOutline,
  UnlockOutline, 
  UserOutline,
  VideoCameraOutline } from '@ant-design/icons-angular/icons';


const jwtTokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtTokenInterceptor,
  multi: true
}

const authenticationUserAppInitializer = { 
  provide: APP_INITIALIZER, 
  useFactory: authenticatedUserInitializer, 
  multi: true,
  deps: [AuthenticationStore, AuthenticationService]
}

const nzI18NProvider = { 
  provide: NZ_I18N, 
  useValue: en_US
}
    
const windowProvider = {
  provide: Window,
  useFactory: ssrWindowFactory,
  deps: [PLATFORM_ID]
}

export const nzGlobalIcons: IconDefinition[] = [
  ArrowLeftOutline,
  ArrowRightOutline,
  ContactsOutline,
  DashboardOutline,
  FolderViewOutline,
  GlobalOutline,
  HomeOutline,
  IdcardOutline,
  LoginOutline,
  MailOutline, 
  MenuFoldOutline,
  MenuUnfoldOutline,
  LockOutline,
  PoweroffOutline,
  SettingOutline,
  TeamOutline, 
  UnlockOutline,
  UserOutline,
  VideoCameraOutline,
]; 

export const provideClientCoreProviders = () => makeEnvironmentProviders([
  jwtTokenInterceptorProvider,
  authenticationUserAppInitializer,
  nzI18NProvider,
  windowProvider,
]);
