import { AsyncPipe, Location } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnDestroy, ViewChild, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { filter, Observable, Subject, take } from 'rxjs';

import { Store } from '@ngrx/store';

import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { ResponseStatus, fadeAnimation, User, PermissionTemplate } from '@vsp/core';
import { PermissionsSelectors } from '@vsp/admin/store/permissions';
import { UserValidators } from '@vsp/admin/core/validators';
import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { buildClaimPermissionGroupFormArray, patchAssignedClaimPermissionsToAvailableClaimPermissions } from '@vsp/admin/shared/form-controls';

import { buildUserAccountCreateForm } from '../../components/user-account-create-form/user-account-create-form.builder';
import { UserAccountsSelectors, UserAccountsActions } from '../../store';
import { UserAccountCreateFormComponent } from '../../components/user-account-create-form/user-account-create-form.component';
import { createUserFromFormValue } from '../../utils';
import { createClaimPermissionGroups } from '@vsp/admin/shared/utils';

@Component({
  selector: 'vsp-user-accounts-create',
  templateUrl: './user-accounts-create.component.html',
  styleUrls: ['./user-accounts-create.component.scss'],
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
    UserAccountCreateFormComponent,
    ReactiveFormsModule,
  ]
})
export class UserAccountsCreateComponent implements OnDestroy {
  private readonly _location: Location = inject(Location);
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _store: Store = inject(Store);
  private readonly _userValidators: UserValidators = inject(UserValidators);
  private readonly _messageService: NzMessageService = inject(NzMessageService);
  private readonly _destroy$: Subject<any> = new Subject<any>();

  @ViewChild(UserAccountCreateFormComponent)
  public formComponent!: UserAccountCreateFormComponent

  public createUserAccountForm!: UntypedFormGroup;

  public permissionTemplates$: Observable<PermissionTemplate[] | null>;

  constructor() {
    this.permissionTemplates$ = this._store.select(PermissionsSelectors.selectPermissionTemplates);
    this._store.select(PermissionsSelectors.selectClaimPermissionGroups)
      .pipe(take(1))
      .subscribe(claimPermissionGroups => {
        this.createUserAccountForm = buildUserAccountCreateForm(
          this._formBuilder, 
          this._userValidators,
          claimPermissionGroups ?? []
        );
      });
  }

  public onCreateUserAccount(formValue: any, shouldReturn: boolean): void {
    if (this.createUserAccountForm.invalid) return;
    const user: User = createUserFromFormValue(formValue);
    this._handleCreateUserResponseMessage(shouldReturn);
    this._store.dispatch(UserAccountsActions.createUserAccountRequest({ user: user }));
  }

  private _handleCreateUserResponseMessage(shouldReturn: boolean): void {
    this._store.select(UserAccountsSelectors.selectCreateUserAccountResponseMessage)
      .pipe(filter(message => !!message), take(1))
      .subscribe(message => {
        if (message?.status === ResponseStatus.SUCCESS) {
          this._resetCreateUserAccountForm();
          this._messageService.success(message?.message || 'Success!')
          if (shouldReturn) {
            this._location.back();
          }
        } else {
          this._messageService.error(message?.message || 'Error!')
        }
        this._store.dispatch(UserAccountsActions.setCreateUserAccountRequestResponseMessage({ message: null } ))
      });
  }


  public onPermissionTemplateSelected(permissionTemplate: PermissionTemplate | null): void {
    if (!permissionTemplate) {
      this._resetClaimPermissionGroups();
      return;
    } else {
      this._handleApplyPermissionTemplateToForm(permissionTemplate);
    }
  }

  public _handleApplyPermissionTemplateToForm(permissionTemplate: PermissionTemplate): void {
    const templateClaimPermisssionGroups: ClaimPermissionNode[] = 
      createClaimPermissionGroups(permissionTemplate.claims || [], true);

    this._store.select(PermissionsSelectors.selectClaimPermissionGroups)
      .pipe(take(1))
      .subscribe(claimPermissionGroups => {
        const patchedClaimPermissionGroups = 
          patchAssignedClaimPermissionsToAvailableClaimPermissions(templateClaimPermisssionGroups, claimPermissionGroups || [])

        const claimPermissionGroupsFromArray = 
          buildClaimPermissionGroupFormArray(this._formBuilder, patchedClaimPermissionGroups);

        if (claimPermissionGroupsFromArray) {
          this.createUserAccountForm
            ?.get('claimPermissionGroups')
            ?.patchValue([ ...(claimPermissionGroupsFromArray.value || []) ]);
        }
      });
  }

  private _resetCreateUserAccountForm(): void {
    this.createUserAccountForm.reset();
    this._resetClaimPermissionGroups();
  }


  private _resetClaimPermissionGroups(): void {
    this._store.select(PermissionsSelectors.selectClaimPermissionGroups)
      .pipe(take(1))
      .subscribe(claimPermissionGroups => {
        const claimPermissionGroupsFromArray = 
          buildClaimPermissionGroupFormArray(this._formBuilder, claimPermissionGroups || []);

        if (claimPermissionGroupsFromArray) {
          this.createUserAccountForm
            ?.get('claimPermissionGroups')
            ?.patchValue([ ...(claimPermissionGroupsFromArray.value || []) ]);
        }
        
        this.formComponent?.autoFocusControl?.setFocusToControl();
      });
  }


  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
    // this._store.dispatch(UserAccountsActions.resetSelectedUserAccountStateSlice());
  }
}
