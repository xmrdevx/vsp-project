import { UntypedFormBuilder, Validators } from '@angular/forms';

import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { buildClaimPermissionGroupFormArray } from '@vsp/admin/shared/form-controls';

export const buildUserAccountUpdateForm = (
    formBuilder: UntypedFormBuilder,
    claimPermissionGroups: ClaimPermissionNode[]
  ) => formBuilder.group({
    id: [null, [Validators.required]],
    username: [{ value: null, disabled: true }],
    email: [{ value: null, disabled: true }],
    profile: formBuilder.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      avatarUrl: [''],
      summary: [''],
      address: formBuilder.group({
        id: ['', [Validators.required]],
        street: [null],
        street2: [null],
        city: [null],
        state: [null],
        zip: [null],
        country: [null],
      })
    }),
    claimPermissionGroups: buildClaimPermissionGroupFormArray(formBuilder, claimPermissionGroups)
  });
