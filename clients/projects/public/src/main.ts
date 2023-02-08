import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import en from '@angular/common/locales/en';

import { provideVspCoreProviders } from '@vsp/core';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { nzGlobalIcons, provideClientCoreProviders } from './app/core/core.providers';

import { environment } from './environments/environment';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(en);

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  bootstrapApplication(
    AppComponent, 
    {
      providers: [
        provideRouter(appRoutes),
        provideVspCoreProviders(environment),
        provideClientCoreProviders(),
        provideHttpClient(
          withInterceptorsFromDi()
        ),
        importProvidersFrom([
          BrowserModule.withServerTransition({ appId: 'serverApp' }),
          BrowserAnimationsModule,
          NzIconModule.forRoot(nzGlobalIcons)
        ])
      ]
    });
};

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
