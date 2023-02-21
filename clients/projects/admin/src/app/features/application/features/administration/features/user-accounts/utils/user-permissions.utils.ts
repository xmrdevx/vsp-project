import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { Claim, User } from '@vsp/core';

export function createUserFromFormValue(formValue: any): User {
  return {
    ...formValue,
    claims: collectClaimsFromClaimPermissionGroups(formValue.claimPermissionGroups)
  } as User
}

function collectClaimsFromClaimPermissionGroups(claimPermissionGroups: ClaimPermissionNode[]): Claim[] {
  const accessGroups: ClaimPermissionNode[] = claimPermissionGroups
    .filter(claimPermissionGroup => claimPermissionGroup.hasPermission);

  const childPermissions: Claim[] = accessGroups
    .flatMap(group => 
      group.children
        .filter(child => child.hasPermission)
        .map(child => child.claim)
      );

  return [
    ...accessGroups.map(access => access.claim), 
    ...childPermissions
  ];
}

export function patchUserClaimPermissionsToAssignableClaimPermissions(
    users: ClaimPermissionNode[], 
    assignable: ClaimPermissionNode[]
): ClaimPermissionNode[] {

  return assignable
    .map(claim => {
      const userClaim: ClaimPermissionNode | undefined = users.find(userClaim => userClaim.label === claim.label)

      if (userClaim) {
        return {
          ...claim,
          hasPermission: userClaim.hasPermission,
          children: patchUserClaimPermissionsToAssignableClaimPermissions(userClaim.children, claim.children)
        }
      }

      return claim;
    });


}
