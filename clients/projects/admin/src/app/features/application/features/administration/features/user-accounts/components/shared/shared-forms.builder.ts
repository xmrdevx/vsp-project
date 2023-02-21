import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ClaimPermissionNode } from '@vsp/admin/core/models';

export const buildClaimPermissionGroupFormArray = 
  (formBuilder: UntypedFormBuilder, claimPermissinoGroups: ClaimPermissionNode[]): UntypedFormArray => {
    return formBuilder.array(
      claimPermissinoGroups.map(group => buildClaimPermissionGroupFormGroup(formBuilder, group) ?? [])
    );
  }

const buildClaimPermissionGroupFormGroup =
  (formBuilder: UntypedFormBuilder, claimPermissionGroup: ClaimPermissionNode): UntypedFormGroup => {
    return formBuilder.group({
      label: [claimPermissionGroup.label],
      hasPermission: [claimPermissionGroup.hasPermission],
      claim: [claimPermissionGroup.claim],
      children: buildClaimPermissionGroupFormArray(formBuilder, claimPermissionGroup?.children ?? [])
    })
  };