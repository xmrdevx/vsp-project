import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService, Page, PageRequest, ValidationResult } from '@vsp/core';

import { BasicQuerySearchFilter } from '@vsp/query-search-filters';
import { User } from '@vsp/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly http: HttpClient = inject(HttpClient);

  public verifyEmail(email: string): Observable<ValidationResult> {
    return this.http.get<ValidationResult>(
      `${this.environmentService.getBaseApiUrl()}/users/verify/email`,
      { params: { email: email } }
    )
  }

  public verifyUserName(userName: string): Observable<ValidationResult> {
    return this.http.get<ValidationResult>(
      `${this.environmentService.getBaseApiUrl()}/users/verify/username`,
      { params: { userName: userName } }
    );
  }

  public searchUsers(filter: BasicQuerySearchFilter, pageRequest: PageRequest): Observable<Page<User>> {
    const queryParams: {[key: string]: string } = { 
      query: filter?.query || '',
      size: pageRequest.size.toString(),
      index: pageRequest.index.toString(),
      column: pageRequest?.sort?.column?.toString() || '',
      direction: pageRequest?.sort?.direction?.toString() || ''
    };
    return this.http.get<Page<User>>(
      `${this.environmentService.getBaseApiUrl()}/users/search`,
      { params: queryParams }
    );
  }

  public createUserAccount(userAccount: User): Observable<User> {
    return this.http.post<User>(
      `${this.environmentService.getBaseApiUrl()}/users`,
      userAccount
    );
  }

  public updateUserAccount(userId: string, userAccount: User): Observable<User> {
    return this.http.put<User>(
      `${this.environmentService.getBaseApiUrl()}/users/${userId}`,
      userAccount
    );
  }

  public getUserByUserId(userId: string): Observable<User> {
    return this.http.get<User>(
      `${this.environmentService.getBaseApiUrl()}/users/${userId}`
    );
  }
}
