import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvironmentService, ForgotPassword, LockoutUserRequest, Page, PageRequest, ResponseMessage, User } from '@vsp/core';
import { Observable } from 'rxjs';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private readonly _endpointSlug: string = 'accounts';
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _http: HttpClient = inject(HttpClient);

  public doesUsernameExist(username: string): Observable<any> {
    const queryParams: {[key: string]: string} = { query: username.trim().toLocaleLowerCase() };
    return this._http.head<any>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/usernames`,
      { params: queryParams }
    );
  }

  public doesEmailExist(username: string): Observable<any> {
    const queryParams: {[key: string]: string} = { query: username.trim().toLocaleLowerCase() };
    return this._http.head<any>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/emails`,
      { params: queryParams }
    );
  }

  public searchUsers(filter: BasicQuerySearchFilter,  pageRequest: PageRequest): Observable<Page<User>> {
    const queryParams: {[key: string]: any} = !pageRequest ? {} : { 
      pageNumber: pageRequest.index,
      pageSize: pageRequest.size,
      sortCol: pageRequest.sort.column,
      sortDir: pageRequest.sort.direction,
      query: filter?.query || '',
      isDeleted: filter?.isDeleted || '',
    };
    return this._http.get<Page<User>>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/users/search`,
      { params: queryParams }
    );
  }

  public createUser(user: User): Observable<User> {
    return this._http.post<User>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/users`,
      user
    );
  }
  
  public updateUser(userId: string, user: User): Observable<User> {
    return this._http.put<User>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/users/${userId}`,
      user
    );
  }

  public lockoutUser(userId: string, request: LockoutUserRequest): Observable<ResponseMessage<void>> {
    return this._http.put<ResponseMessage<void>>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/users/${userId}/lockout`,
      request
    );
  }

  public getUserById(userId: string): Observable<User> {
    return this._http.get<User>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/users/${userId}`
    );
  }

  public forgotPassword(request: ForgotPassword): Observable<ResponseMessage<void>> {
    return this._http.post<ResponseMessage<void>>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/forgot-password`,
      request
    );
  }
}
