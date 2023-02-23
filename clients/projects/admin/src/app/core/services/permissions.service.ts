import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Claim, EnvironmentService, Page, PageRequest, PermissionTemplate } from '@vsp/core';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

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

  public createTemplate(permissionTemplate: PermissionTemplate): Observable<PermissionTemplate> {
    return this._http.post<PermissionTemplate>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates`,
      permissionTemplate
    );
  }

  public getTemplates(): Observable<PermissionTemplate[]> {
    return this._http.get<PermissionTemplate[]>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates`,
    );
  }

  public searchTemplates(filter: BasicQuerySearchFilter, pageRequest: PageRequest): Observable<Page<PermissionTemplate>> {
    const queryParams: {[key: string]: any} = !pageRequest ? {} : { 
      pageNumber: pageRequest.index,
      pageSize: pageRequest.size,
      sortCol: pageRequest.sort.column,
      sortDir: pageRequest.sort.direction,
      query: filter?.query || '',
      isDeleted: filter?.isDeleted ?? '',
    };
    return this._http.get<Page<PermissionTemplate>>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates/search`,
      { params: queryParams }
    );
  }

  public updateTemplate(templateId: string, permissionTemplate: PermissionTemplate): Observable<PermissionTemplate> {
    return this._http.put<PermissionTemplate>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates/${templateId}`,
      permissionTemplate
    );
  }

  public getTemplateById(templateId: string): Observable<PermissionTemplate> {
    return this._http.get<PermissionTemplate>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates/${templateId}`
    );
  }

  public deleteTemplate(templateId: string): Observable<PermissionTemplate> {
    return this._http.delete<PermissionTemplate>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates/${templateId}`
    );
  }

  public restoreTemplate(templateId: string): Observable<PermissionTemplate> {
    return this._http.delete<PermissionTemplate>(
      `${this._environmentService.getBaseApiUrl()}/${this._endpointSlug}/templates/${templateId}/restore`
    );
  }

}
