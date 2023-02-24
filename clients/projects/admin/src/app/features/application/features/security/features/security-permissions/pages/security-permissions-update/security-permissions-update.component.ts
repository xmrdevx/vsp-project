import { AsyncPipe, Location, NgIf } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, Subject, take, takeUntil, withLatestFrom } from 'rxjs';

import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { fadeAnimation, PermissionTemplate, ResponseStatus } from '@vsp/core';
import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { createClaimPermissionGroups } from '@vsp/admin/shared/utils';
import { PermissionsSelectors } from '@vsp/admin/store/permissions';

import { 
  buildClaimPermissionGroupFormArray, 
  patchAssignedClaimPermissionsToAvailableClaimPermissions } from '@vsp/admin/shared/form-controls';

import { SecurityPermissionsActions, SecurityPermissionsSelectors } from '../../store';
import { PermissionTemplateFormComponent } from '../../components/permission-template-form/permission-template-form.component';
import { buildPermissionTemplateForm } from '../../components/permission-template-form/permission-template-form.builder';
import { createPermissionTemplateFromFormValue } from '../../utils';

@Component({
  selector: 'vsp-security-permissions-update',
  templateUrl: './security-permissions-update.component.html',
  styleUrls: ['./security-permissions-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NzButtonModule,
    NzCardModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzTypographyModule,
    ReactiveFormsModule,
    PermissionTemplateFormComponent,
  ]
})
export class SecurityPermissionsUpdateComponent implements OnInit, OnDestroy {
  private readonly _location: Location = inject(Location);
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _store: Store = inject(Store);
  private readonly _messageService: NzMessageService = inject(NzMessageService);
  private readonly _destroy$: Subject<any> = new Subject<any>();

  public updatePermissionTemplateForm!: UntypedFormGroup;

  constructor() {
    this._initializeForm();
  }

  ngOnInit(): void {
    this._listenForSelectedPermissionTemplateChange();
  }

  public onUpdatePermissionTemplate(formValue: any): void {
    if (this.updatePermissionTemplateForm.invalid) return;
    const permissionTemplate: PermissionTemplate = createPermissionTemplateFromFormValue(formValue);
    this._handleUpdatePermissionTemplateResponseMessage();
    this._store.dispatch(
      SecurityPermissionsActions.updatePermissionTemplateRequest({ 
        templateId: permissionTemplate?.id, permissionTemplate 
      })
    );
  }

  private _handleUpdatePermissionTemplateResponseMessage(): void {
    this._store.select(SecurityPermissionsSelectors.selectUpdatePermissionTemplateResponseMessage)
      .pipe(filter(message => !!message), take(1))
      .subscribe(message => {
        if (message?.status === ResponseStatus.SUCCESS) {
          this._messageService.success(message?.message || 'Success!')
          this._location.back();
        } else {
          this._messageService.error(message?.message || 'Error!')
        }
        this._store.dispatch(SecurityPermissionsActions
          .setUpdatePermissionTemplateResponseMessage({ message: null } ))
      });
  }  

  private _initializeForm(): void {
    this._store.select(PermissionsSelectors.selectClaimPermissionGroups)
      .pipe(take(1))
      .subscribe(claimPermissionGroups => {
        this.updatePermissionTemplateForm = 
          buildPermissionTemplateForm(this._formBuilder, claimPermissionGroups || []);
      });
  }

  private _listenForSelectedPermissionTemplateChange(): void {
    this._store.select(SecurityPermissionsSelectors.selectSelectedPermissionTemplate)
      .pipe(
        takeUntil(this._destroy$),
        withLatestFrom(this._store.select(PermissionsSelectors.selectClaimPermissionGroups))  
      )
      .subscribe(([selectedPermissionTemplate, claimPermissionGroups]) => {
        this.updatePermissionTemplateForm.patchValue({
          ...selectedPermissionTemplate
        });

        // Map permission template claims to claim permission groups
        const permissionTemplateClaimPermissions: ClaimPermissionNode[] = 
          createClaimPermissionGroups(selectedPermissionTemplate?.claims || [], true);

        // Patch through permission template claim permissions groups to assignable
        const patchedClaimPermissionGroups:  ClaimPermissionNode[] = 
          patchAssignedClaimPermissionsToAvailableClaimPermissions(
            permissionTemplateClaimPermissions, claimPermissionGroups ?? [])
          ;
        
        // Build new claims form array with patched assignable permissions
        const claimPermissionGroupsFromArray = 
          buildClaimPermissionGroupFormArray(this._formBuilder, patchedClaimPermissionGroups || []);

        if (claimPermissionGroupsFromArray) {
          this.updatePermissionTemplateForm
            ?.get('claimPermissionGroups')
            ?.patchValue([ ...(claimPermissionGroupsFromArray.value || []) ]);
        }
      });
  }

  ngOnDestroy(): void {
    this._store.dispatch(SecurityPermissionsActions.setSelectedPermissionTemplate({ 
      permissionTemplate: null
    }));
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
