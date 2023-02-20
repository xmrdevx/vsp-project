import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap, take } from 'rxjs';

import { AuthenticatedUser, Credentials, ForgotPassword, RefreshTokenRequest, ResetPassword, ResponseMessage, ResponseStatus } from '@vsp/core';

import { AuthenticationService } from '../services';

export interface AuthenticationState {
  signInResponseMessage: ResponseMessage<void>| null,
  refreshAccessTokenResponseMessage: ResponseMessage<void>| null,
  authenticatedUser: AuthenticatedUser | null,
  passwordResetRequestResponseMessage: ResponseMessage<void>| null,
  resetPasswordResponseMessage: ResponseMessage<void>| null,
}

export const initialAuthenticationState: AuthenticationState = {
  signInResponseMessage: null,
  refreshAccessTokenResponseMessage: null,
  authenticatedUser: null,
  passwordResetRequestResponseMessage: null,
  resetPasswordResponseMessage: null
} as AuthenticationState;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStore extends ComponentStore<AuthenticationState> {
  public readonly signInResponseMessage$ = this.select(state => state.signInResponseMessage);
  public readonly refreshAccessTokenResponseMessage$ = this.select(state => state.refreshAccessTokenResponseMessage);
  public readonly authenticatedUser$ = this.select(state => state.authenticatedUser);
  public readonly authenticatedStatus$ = this.select(state => state?.authenticatedUser?.status || null);

  public readonly passwordResetRequestResponseMessage$ = this.select(state => state.passwordResetRequestResponseMessage);
  public readonly resetPasswordResponseMessage$ = this.select(state => state.resetPasswordResponseMessage);
  
  constructor(private _authenticationService: AuthenticationService) {
    super({...initialAuthenticationState});
  }

  public readonly setSignInResponseMessage = this.updater((state: AuthenticationState, message: ResponseMessage<void>| null) => ({
    ...state,
    signInResponseMessage: message
  }));

  public readonly setRefreshAccessTokenResponseMessage = this.updater((state: AuthenticationState, message: ResponseMessage) => ({
    ...state,
    refreshAccessTokenResponseMessage: message
  }));

  public readonly setAuthenticatedUser = this.updater((state: AuthenticationState, authenticatedUser: AuthenticatedUser | null) => ({
    ...state,
    authenticatedUser: authenticatedUser
  }));

  public readonly setPasswordResetRequestResponseMessage = this.updater((state: AuthenticationState, message: ResponseMessage<void>| null) => ({
    ...state,
    passwordResetRequestResponseMessage: message
  }));

  public readonly setResetPasswordResponseMessage = this.updater((state: AuthenticationState, message: ResponseMessage<void>| null) => ({
    ...state,
    resetPasswordResponseMessage: message
  }));

  public readonly signInUser = this.effect((props$: Observable<Credentials>) => {
    return props$.pipe(
      // tap(() => this.setOffenserSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(credentials => {
        return this._authenticationService.loginUser(credentials).pipe(
          take(1),
          tapResponse(
            authenticatedUser => this._handleSuccessfulAuthentication(authenticatedUser),
            error => this._handleSignInError(error)
          ),
          catchError((error) => {
            this._handleSignInError(error);
            return EMPTY;
          })
        );
      })
    );
  });

  public readonly signOutUser = this.updater((state: AuthenticationState) => {
    this._authenticationService.removeCachedAuthenticatedUser();
    return {
      ...state,
      authenticatedUser: null
    } as AuthenticationState;
  });

  public readonly refreshAccessToken = this.effect((props$: Observable<RefreshTokenRequest>) => {
    return props$.pipe(
      switchMap(refreshTokenRequest => {
        return this._authenticationService.refreshToken(refreshTokenRequest).pipe(
          take(1),
          tapResponse(
            authenticatedUser => this._handleSuccessfulAuthentication(authenticatedUser),
            error => this._handleSignInError(error)
          ),
          catchError((error) => {
            this._handleSignInError(error);
            return EMPTY;
          })
        )
      })
    )
  });

  public readonly forgotPassword = this.effect((props$: Observable<ForgotPassword>) => {
    return props$.pipe(
      // tap(() => this.setOffenserSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(request => {
        return this._authenticationService.requestPasswordReset(request).pipe(
          take(1),
          tapResponse(
            response => this.setPasswordResetRequestResponseMessage(response),
            error => this.setPasswordResetRequestResponseMessage({ 
              status: ResponseStatus.ERROR, 
              message: error || 'Error' 
            } as ResponseMessage)
          ),
          catchError((error) => {
            this.setPasswordResetRequestResponseMessage({ 
              status: ResponseStatus.ERROR, 
              message: error.error || 'Error' 
            } as ResponseMessage);
            return EMPTY;
          })
        );
      })
    );
  });

  public readonly resetPassword = this.effect((props$: Observable<ResetPassword>) => {
    return props$.pipe(
      // tap(() => this.setOffenserSearchPageLoadingState(LoadingState.LOADING)),
      switchMap(request => {
        return this._authenticationService.resetPassword(request).pipe(
          take(1),
          tapResponse(
            response => this.setResetPasswordResponseMessage(response),
            error => this.setResetPasswordResponseMessage({ 
              status: ResponseStatus.ERROR, 
              message: error || 'Error' 
            } as ResponseMessage)
          ),
          catchError((error) => {
            this.setResetPasswordResponseMessage({ 
              status: ResponseStatus.ERROR, 
              message: error.error || 'Error' 
            } as ResponseMessage);
            return EMPTY;
          })
        );
      })
    );
  });

  private _handleSuccessfulAuthentication(authenticatedUser: AuthenticatedUser): void {
    this.setAuthenticatedUser(authenticatedUser);
    this._authenticationService.cacheAuthenticatedUser(authenticatedUser);
    this.setSignInResponseMessage(null);
  }

  private _handleSignInError(error: any): void {
    this.setSignInResponseMessage({
      status: ResponseStatus.ERROR,
      message: 'Invalid User Name or Password!'
    });
  }
}
