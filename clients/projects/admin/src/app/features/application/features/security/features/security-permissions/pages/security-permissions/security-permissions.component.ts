import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, tap } from 'rxjs';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { Page, PageRequest, Sort, fadeAnimation, PermissionTemplate } from '@vsp/core';
import { VspDatatableComponent, VspDatatableWidgetColumnEditorComponent, TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter, BasicQuerySearchWithDeletedFilterComponent } from '@vsp/query-search-filters';

import { defaultBasicQuerySearchFilter, defaultPageRequest } from '@vsp/admin/core/constants';

import { SecurityPermissionsActions, SecurityPermissionsSelectors } from '../../store';
import { defaultSecurityPermissionsSort } from '../../constants/sort.defaults';

@Component({
  selector: 'vsp-security-permissions',
  templateUrl: './security-permissions.component.html',
  styleUrls: ['./security-permissions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    BasicQuerySearchWithDeletedFilterComponent,
    NgIf,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzIconModule,
    NzPageHeaderModule,
    NzPopconfirmModule,
    NzTypographyModule,
    VspDatatableWidgetColumnEditorComponent,
    VspDatatableComponent,
    RouterLink,
  ]
})
export class SecurityPermissionsComponent {
  private readonly _store: Store = inject(Store);

  public permissionTemplatesTableDefinition$: Observable<TableDefinition | null> = this._store
      .select(SecurityPermissionsSelectors.selectPermissionTemplatesTableDefinition);

  public permissionTemplatesPage$: Observable<Page<PermissionTemplate> | null> = this._store
      .select(SecurityPermissionsSelectors.selectPermissionTemplatesPage);

  private _defaultPageRequest: PageRequest = defaultPageRequest;
  public defaultSort: Sort = defaultSecurityPermissionsSort;

  public permissionTemplatesSearchFilter!: BasicQuerySearchFilter | null;
  
  public permissionTemplatesSearchFilter$: Observable<BasicQuerySearchFilter | null> = this._store
    .select(SecurityPermissionsSelectors.selectPermissionTemplatesSearchFilter)
    .pipe(tap(filter => this.permissionTemplatesSearchFilter = filter));

  public onSearchFilterChanges(filter: BasicQuerySearchFilter): void {
    this._store.dispatch(
      SecurityPermissionsActions.setPermissionTemplatesSearchFilter({ 
        filter : filter
      })
    );
    this._searchPermissionTemplates(filter, this._defaultPageRequest);
  }

  public onDeletePermissionTemplate(permissionTemplate: PermissionTemplate): void {
    this._store.dispatch(
      SecurityPermissionsActions.deletePermissionTemplateRequest({
        templateId: permissionTemplate.id
      })
    )
  }

  public onRestorePermissionTemplate(permissionTemplate: PermissionTemplate): void {
    this._store.dispatch(
      SecurityPermissionsActions.restorePermissionTemplateRequest({
        templateId: permissionTemplate.id
      })
    )
  }

  public onPermissionTemplatesPageChange(pageRequest: PageRequest): void {
    this._searchPermissionTemplates(this.permissionTemplatesSearchFilter, pageRequest);
  }

  public onApplyColumnChanges(tableDefinition: TableDefinition | null): void {
    this._store.dispatch(
      SecurityPermissionsActions.setPermissionTemplatesTableDefinition({
        tableDefinition: tableDefinition
      })
    );
  }

  public onResetColumnChanges(shouldReset: boolean): void {
    if (shouldReset) {
      this._store.dispatch(SecurityPermissionsActions.resetPermissionsTemplatesTableDefinition());
    }
  }

  private _searchPermissionTemplates(filter: BasicQuerySearchFilter | null, pageRequest: PageRequest): void {
    this._store.dispatch(
      SecurityPermissionsActions.searchPermissionTemplatesRequest({
        filter: filter || defaultBasicQuerySearchFilter,
        pageRequest: pageRequest
      })
    );
  }
}
