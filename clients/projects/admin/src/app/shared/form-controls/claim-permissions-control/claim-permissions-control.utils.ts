import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { Claim } from '@vsp/core';


export const buildClaimPermissionGroupFormArray = 
  (formBuilder: UntypedFormBuilder, claimPermissinoGroups: ClaimPermissionNode[]): UntypedFormArray => {
    return formBuilder.array(
      claimPermissinoGroups.map(group => buildClaimPermissionGroupFormGroup(formBuilder, group) ?? [])
    );
  }


export const buildClaimPermissionGroupFormGroup =
  (formBuilder: UntypedFormBuilder, claimPermissionGroup: ClaimPermissionNode): UntypedFormGroup => {
    return formBuilder.group({
      label: [claimPermissionGroup.label],
      hasPermission: [claimPermissionGroup.hasPermission],
      claim: [claimPermissionGroup.claim],
      children: buildClaimPermissionGroupFormArray(formBuilder, claimPermissionGroup?.children ?? [])
    })
  };


export function collectClaimsFromClaimPermissionGroups(claimPermissionGroups: ClaimPermissionNode[]): Claim[] {
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


export function patchAssignedClaimPermissionsToAvailableClaimPermissions(
  assigned: ClaimPermissionNode[], 
  available: ClaimPermissionNode[]
): ClaimPermissionNode[] {

  return available
    .map(claim => {
      const userClaim: ClaimPermissionNode | undefined = assigned.find(userClaim => userClaim.label === claim.label)

      if (userClaim) {
        return {
          ...claim,
          hasPermission: userClaim.hasPermission,
          children: patchAssignedClaimPermissionsToAvailableClaimPermissions(userClaim.children, claim.children)
        }
      }

      return claim;
    });
}

  