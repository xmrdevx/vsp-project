import { FormArray, FormBuilder, FormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Claim, MatchValidators, ValidationPatterns} from '@vsp/core';

import { UserValidators } from '@vsp/admin/core/validators';
import { ClaimPermissionNode } from '@vsp/admin/core/models';

export const buildUserAccountCreateForm = (
    formBuilder: UntypedFormBuilder, 
    userValidators: UserValidators, 
    claimPermissionGroups: ClaimPermissionNode[]
  ) => formBuilder.group({
    username: ['', [
      Validators.required
    ], [userValidators.validateUsername()]],
    email: ['', [
      Validators.required,
      Validators.email
    ], [userValidators.validateEmail()]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(ValidationPatterns.password)
    ]],
    confirmPassword: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(ValidationPatterns.password)
    ]],
    profile: formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      avatarUrl: [''],
      summary: [''],
      address: formBuilder.group({
        street: [null],
        street2: [null],
        city: [null],
        state: [null],
        zip: [null],
        country: [null],
      })
    }),
    claimPermissionGroups: buildClaimPermissionGroupFormArray(formBuilder, claimPermissionGroups)
  }, { validators: [MatchValidators.mustMatch('password', 'confirmPassword')]});


export const buildClaimPermissionGroupFormArray = 
  (formBuilder: FormBuilder, claimPermissinoGroups: ClaimPermissionNode[]): FormArray => {
    return formBuilder.array(
      claimPermissinoGroups.map(group => buildClaimPermissionGroupFormGroup(formBuilder, group) ?? [])
    );
  }

const buildClaimPermissionGroupFormGroup =
  (formBuilder: FormBuilder, claimPermissionGroup: ClaimPermissionNode): FormGroup => {
    return formBuilder.group({
      label: [claimPermissionGroup.label],
      hasPermission: [claimPermissionGroup.hasPermission],
      claim: [claimPermissionGroup.claim],
      children: buildClaimPermissionGroupFormArray(formBuilder, claimPermissionGroup?.children ?? [])
    })
  };
