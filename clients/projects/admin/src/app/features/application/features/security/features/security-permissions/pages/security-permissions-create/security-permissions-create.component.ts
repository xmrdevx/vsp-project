import { Component, ChangeDetectionStrategy, ViewChild, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { fadeAnimation, ResponseStatus, PermissionTemplate } from '@vsp/core';

import { PermissionsSelectors } from '@vsp/admin/store/permissions';
import { buildClaimPermissionGroupFormArray } from '@vsp/admin/shared/form-controls';

import { SecurityPermissionsActions, SecurityPermissionsSelectors } from '../../store';
import { PermissionTemplateFormComponent } from '../../components/permission-template-form/permission-template-form.component';
import { buildPermissionTemplateForm } from '../../components/permission-template-form/permission-template-form.builder';
import { createPermissionTemplateFromFormValue } from '../../utils';

@Component({
  selector: 'vsp-security-permissions-create',
  templateUrl: './security-permissions-create.component.html',
  styleUrls: ['./security-permissions-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NzBreadCrumbModule,
    NzButtonModule,
    NzCardModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzTypographyModule,
    ReactiveFormsModule,
    PermissionTemplateFormComponent
  ]
})
export class SecurityPermissionsCreateComponent {
  private readonly _location: Location = inject(Location);
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _store: Store = inject(Store);
  private readonly _messageService: NzMessageService = inject(NzMessageService);
  
  @ViewChild(PermissionTemplateFormComponent)
  public formComponent!: PermissionTemplateFormComponent;

  public createPermissionTemplateForm!: UntypedFormGroup;

  constructor() {
    this._store.select(PermissionsSelectors.selectClaimPermissionGroups)
      .pipe(take(1))
      .subscribe(claimPermissionGroups => {
        this.createPermissionTemplateForm = 
          buildPermissionTemplateForm(this._formBuilder, claimPermissionGroups || []);
      });
  }

  public onCreatePermissionTemplate(formValue: any, shouldReturn: boolean): void {
    if (this.createPermissionTemplateForm.invalid) return;
    delete formValue['id'];
    const permissionTemplate: PermissionTemplate = createPermissionTemplateFromFormValue(formValue);
    this._handleCreatePermissionTemplateResponseMessage(shouldReturn);
    this._store.dispatch(SecurityPermissionsActions.createPermissionTemplateRequest({ permissionTemplate }));
  }

  private _handleCreatePermissionTemplateResponseMessage(shouldReturn: boolean): void {
    this._store.select(SecurityPermissionsSelectors.selectCreatePermissionTemplateResponseMessage)
      .pipe(filter(message => !!message), take(1))
      .subscribe(message => {
        if (message?.status === ResponseStatus.SUCCESS) {
          this._resetCreatePermissionTemplateForm();
          this._messageService.success(message?.message || 'Success!')
          if (shouldReturn) {
            this._location.back();
          }
        } else {
          this._messageService.error(message?.message || 'Error!')
        }
        this._store.dispatch(SecurityPermissionsActions.setCreatePermissionTemplateResponseMessage({ message: null } ))
      });
  }

  private _resetCreatePermissionTemplateForm(): void {
    this.createPermissionTemplateForm.reset();
    this._resetClaimPermissionGroups();
  }

  private _resetClaimPermissionGroups(): void {
    this._store.select(PermissionsSelectors.selectClaimPermissionGroups)
      .pipe(take(1))
      .subscribe(claimPermissionGroups => {
        const claimPermissionGroupsFromArray = 
          buildClaimPermissionGroupFormArray(this._formBuilder, claimPermissionGroups || []);

        if (claimPermissionGroupsFromArray) {
          this.createPermissionTemplateForm
            ?.get('claimPermissionGroups')
            ?.patchValue([ ...(claimPermissionGroupsFromArray.value || []) ]);
        }
        
        this.formComponent?.autoFocusControl?.setFocusToControl();
      });
  }
}
