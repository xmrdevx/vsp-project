import { UntypedFormBuilder, Validators } from '@angular/forms';

import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { buildClaimPermissionGroupFormArray } from '@vsp/admin/shared/form-controls';

export const buildPermissionTemplateForm = (
  formBuilder: UntypedFormBuilder, 
  claimPermissionGroups: ClaimPermissionNode[]
) => formBuilder.group({
  id: [null],
  name: ['', [Validators.required]],
  description: ['', [Validators.required]],
  claimPermissionGroups: buildClaimPermissionGroupFormArray(formBuilder, claimPermissionGroups)
});
