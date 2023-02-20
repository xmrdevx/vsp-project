import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { 
  EnvironmentService, 
  Page, 
  PageRequest } from '@vsp/core';

import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private readonly _endpointSlug: string = 'security/permissions';
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _http: HttpClient = inject(HttpClient);

  // public getAssignableModulePermission(): Observable<ModulePermission[]> {
  //   return this._http.get<ModulePermission[]>(
  //     `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/available`
  //   );
  // }

  // public getTemplateModulePermissionNames(): Observable<TemplateModulePermissionName[]> {
  //   return this._http.get<TemplateModulePermissionName[]>(
  //     `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates`
  //   );
  // }

  // public getTemplateModulePermissionNameById(templateModulePermissionNameId: string): Observable<TemplateModulePermissionName> {
  //   return this._http.get<TemplateModulePermissionName>(
  //     `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates/${templateModulePermissionNameId}`
  //   );
  // }

  // public deleteTemplateModulePermissionNameById(templateModulePermissionNameId: string): Observable<TemplateModulePermissionName> {
  //   return this._http.delete<TemplateModulePermissionName>(
  //     `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates/${templateModulePermissionNameId}`
  //   );
  // }

  // public restoreTemplateModulePermissionNameById(templateModulePermissionNameId: string): Observable<TemplateModulePermissionName> {
  //   return this._http.patch<TemplateModulePermissionName>(
  //     `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates/${templateModulePermissionNameId}/restore`, {}
  //   );
  // }
}
