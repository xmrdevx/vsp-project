import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { collectClaimsFromClaimPermissionGroups } from '@vsp/admin/shared/form-controls';
import { Claim, User } from '@vsp/core';

export function createUserFromFormValue(formValue: any): User {
  return {
    ...formValue,
    claims: collectClaimsFromClaimPermissionGroups(formValue.claimPermissionGroups)
  } as User
}
