import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Claim, EnvironmentService } from '@vsp/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private readonly _endpointSlug: string = 'permissions';
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _http: HttpClient = inject(HttpClient);

  public getAssignablePermission(): Observable<Claim[]> {
    return this._http.get<Claim[]>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/available`
    );
  }
}
