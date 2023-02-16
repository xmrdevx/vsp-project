import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { 
  AuthenticatedUser, 
  CACHE_SERVICE, 
  Credentials, 
  EnvironmentService, 
  ICacheService, 
  ForgotPassword, 
  RefreshTokenRequest, 
  ResetPassword, 
  ResponseMessage } from '@vsp/core';
  
import { CacheKeys } from '../constants';
import { REQUIRES_AUTHENTICATION } from '../interceptors';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _cacheService: ICacheService = inject(CACHE_SERVICE);
         
  public loginUser(credentials: Credentials): Observable<AuthenticatedUser> {
    return this._http.post<AuthenticatedUser>(
      `${this._environmentService.getBaseAuthUrl()}/sign-in`, 
      credentials
    );
  }

  public requestPasswordReset(request: ForgotPassword): Observable<ResponseMessage> {
    return this._http.post<ResponseMessage>(
      `${this._environmentService.getBaseApiUrl()}/accounts/forgot-password`,
      request,
      { context: new HttpContext().set(REQUIRES_AUTHENTICATION, false) }
    );
  }

  public resetPassword(request: ResetPassword): Observable<ResponseMessage> {
    return this._http.post<ResponseMessage>(
      `${this._environmentService.getBaseApiUrl()}/accounts/reset-password`,
      request,
      { context: new HttpContext().set(REQUIRES_AUTHENTICATION, false) }
    );
  } 

  public refreshToken(refreshTokenRequest: RefreshTokenRequest): Observable<AuthenticatedUser> {
    return this._http.post<AuthenticatedUser>(
      `${this._environmentService.getBaseAuthUrl()}/refresh-token`,
      refreshTokenRequest,
      { context: new HttpContext().set(REQUIRES_AUTHENTICATION, false) }
    );
  }

  public getCachedAuthenticatedUser(): AuthenticatedUser | null {
    return this._cacheService.getItem(CacheKeys.AUTHENTICATED_USER);
  }

  public cacheAuthenticatedUser(user: AuthenticatedUser): void {
    this._cacheService.setItem(CacheKeys.AUTHENTICATED_USER, user);
  }

  public removeCachedAuthenticatedUser(): void {
    this._cacheService.removeItem(CacheKeys.AUTHENTICATED_USER);
  }
}
