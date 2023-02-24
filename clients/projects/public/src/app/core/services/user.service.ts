import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService, RegistrationUser, User, ValidationResult } from '@vsp/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _endpointSlug: string = 'users';
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _httpClient: HttpClient = inject(HttpClient);

  public registerUser(registration: RegistrationUser): Observable<User> {
    return this._httpClient.post<User>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/register`,
      registration
    );
  }

  public verifyEmail(email: string): Observable<ValidationResult> {
    return this._httpClient.get<ValidationResult>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/verify/email`,
      { params: { email: email } }
    )
  }

  public verifyUserName(userName: string): Observable<ValidationResult> {
    return this._httpClient.get<ValidationResult>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/verify/username`,
      { params: { userName: userName } }
    );
  }

  public getUserSettings(): Observable<User> {
    return this._httpClient.get<User>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/settings`
    );
  }
}
