import { collectClaimsFromClaimPermissionGroups } from '@vsp/admin/shared/form-controls';
import { PermissionTemplate } from '@vsp/core';

export function createPermissionTemplateFromFormValue(formValue: any): PermissionTemplate {
  return {
    ...formValue,
    claims: collectClaimsFromClaimPermissionGroups(formValue.claimPermissionGroups)
  } as PermissionTemplate
}
