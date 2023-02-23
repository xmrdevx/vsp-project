import { AsyncPipe, Location, NgIf } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, Observable, Subject, take, takeUntil, withLatestFrom } from 'rxjs';

import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { 
  User,
  fadeAnimation, 
  ResponseStatus, 
  ForgotPassword,
  PermissionTemplate} from '@vsp/core';

import { PermissionsSelectors } from '@vsp/admin/store/permissions';
import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { createClaimPermissionGroups } from '@vsp/admin/shared/utils';
import { buildClaimPermissionGroupFormArray, patchAssignedClaimPermissionsToAvailableClaimPermissions } from '@vsp/admin/shared/form-controls';

import { buildUserAccountUpdateForm } from '../../components/user-account-update-form/user-account-update-form.builder';
import { UserAccountsActions, UserAccountsSelectors } from '../../store';
import { UserAccountUpdateFormComponent } from '../../components/user-account-update-form/user-account-update-form.component';
import { createUserFromFormValue } from '../../utils';



@Component({
  selector: 'vsp-user-accounts-update',
  templateUrl: './user-accounts-update.component.html',
  styleUrls: ['./user-accounts-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NzBreadCrumbModule,
    NzButtonModule,
    NzCardModule,
    NzMessageModule,
    NzPageHeaderModule,
    NzTypographyModule,
    ReactiveFormsModule,
    UserAccountUpdateFormComponent
  ]
})
export class UserAccountsUpdateComponent implements OnInit, OnDestroy {
  private readonly _location: Location = inject(Location);
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _store: Store = inject(Store);
  private readonly _messageService: NzMessageService = inject(NzMessageService);
  private readonly _destroy$: Subject<void> = new Subject<void>();

  public updateUserAccountForm!: UntypedFormGroup;

  public selectedUserAccount$: Observable<User | null> = 
    this._store.select(UserAccountsSelectors.selectSelectedUserAccount);

  public permissionTemplates$: Observable<PermissionTemplate[] | null> = 
    this._store.select(PermissionsSelectors.selectPermissionTemplates);

  constructor() {
    this._store.select(PermissionsSelectors.selectClaimPermissionGroups)
      .pipe(take(1))
      .subscribe(claimPermissionGroups => 
        this.updateUserAccountForm = 
          buildUserAccountUpdateForm(this._formBuilder, claimPermissionGroups || [])
      );
  }

  ngOnInit(): void {
    this._listenForSelectedUserAccountChanges();
  }

  public onUpdateUserAccount(formValue: any): void {
    if (this.updateUserAccountForm.invalid) return;
    const user: User = createUserFromFormValue(formValue);
    this._handleUpdateUserResponseMessage();
    this._store.dispatch(
      UserAccountsActions.updateUserAccountRequest({ userId: user?.id, user })
    );
  }

  public onIssueForgotPasswordRequest(request: ForgotPassword): void {
    this._handleIssueForgotPasswordRequestResponseMessage();
    this._store.dispatch(UserAccountsActions.issueForgotPasswordRequest({ request }));
  }

  public onPermissionTemplateSelected(permissionTemplate: PermissionTemplate | null): void {
    if (!permissionTemplate) {
      this._resetClaimPermissionGroups();
      return;
    } else {
      this._handleApplyPermissionTemplateToForm(permissionTemplate)
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
          this.updateUserAccountForm
            ?.get('claimPermissionGroups')
            ?.patchValue([ ...(claimPermissionGroupsFromArray.value || []) ]);
        }
      });
  }

  private _handleUpdateUserResponseMessage(): void {
    this._store.select(UserAccountsSelectors.selectUpdateUserAccountResponseMessage)
      .pipe(filter(message => !!message), take(1))
      .subscribe(message => {
        if (message?.status === ResponseStatus.SUCCESS) {
          this._messageService.success(message?.message || 'Success!')
          this._location.back();
        } else {
          this._messageService.error(message?.message || 'Error!')
        }
        this._store.dispatch(UserAccountsActions
          .setUpdateUserAccountRequestResponseMessage({ message: null } ))
      });
  }

  private _handleIssueForgotPasswordRequestResponseMessage(): void {
    this._store.select(UserAccountsSelectors.selectIssueForgotPasswordRequestResponseMessage)
      .pipe(filter(message => !!message), take(1))
      .subscribe(message => {
        if (message?.status === ResponseStatus.SUCCESS) {
          this._messageService.success(message?.message || 'Success!')
        } else {
          this._messageService.error(message?.message || 'Error!')
        }
        this._store.dispatch(UserAccountsActions
          .setIssueForgotPasswordRequestResponseMessage({ message: null } ))
      });
  }

  private _resetClaimPermissionGroups(): void {
    this._store.select(PermissionsSelectors.selectClaimPermissionGroups)
      .pipe(take(1))
      .subscribe(claimPermissionGroups => {
        const claimPermissionGroupsFromArray = 
          buildClaimPermissionGroupFormArray(this._formBuilder, claimPermissionGroups || []);

        if (claimPermissionGroupsFromArray) {
          this.updateUserAccountForm
            ?.get('claimPermissionGroups')
            ?.patchValue([ ...(claimPermissionGroupsFromArray.value || []) ]);
        }
      });
  }

  private _listenForSelectedUserAccountChanges(): void {
    this._store.select(UserAccountsSelectors.selectSelectedUserAccount)
      .pipe(
        takeUntil(this._destroy$),
        withLatestFrom(this._store.select(PermissionsSelectors.selectClaimPermissionGroups))  
      )
      .subscribe(([selectedUserAccount, claimPermissionGroups]) => {
        this.updateUserAccountForm.patchValue({
          ...selectedUserAccount
        });

        // Map users claims to claim permission groups
        const userClaimPermissions: ClaimPermissionNode[] = 
          createClaimPermissionGroups(selectedUserAccount?.claims || [], true);

        // Patch through users claim permissions groups to assignable
        const patchedClaimPermissionGroups:  ClaimPermissionNode[] = 
          patchAssignedClaimPermissionsToAvailableClaimPermissions(userClaimPermissions, claimPermissionGroups ?? []);
        
        // Build new claims form array with patched assignable permissions
        const claimPermissionGroupsFromArray = 
          buildClaimPermissionGroupFormArray(this._formBuilder, patchedClaimPermissionGroups || []);

        if (claimPermissionGroupsFromArray) {
          this.updateUserAccountForm
            ?.get('claimPermissionGroups')
            ?.patchValue([ ...(claimPermissionGroupsFromArray.value || []) ]);
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this._store.dispatch(UserAccountsActions.resetSelectedUserAccountStateSlice());
  }
}
