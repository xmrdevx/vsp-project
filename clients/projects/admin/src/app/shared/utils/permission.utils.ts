import { Claim } from '@vsp/core';
import { ClaimPermissionNode } from '../../core/models';

export function createClaimPermissionGroups(claims: Claim[], defaultHasPermission: boolean = false): ClaimPermissionNode[] {
  const nonAccessClaims: Claim[] = 
    claims.filter(claim => claim.type !== 'access');
    
  return claims
    .filter(claim => claim.type === 'access')
    .sort((a, b) => sortClaimsByValue(a, b))
    .map(claim => {
      const children: ClaimPermissionNode[] = nonAccessClaims
        .filter(child => child.value === claim.value)
        .sort((a, b) => sortClaimsByType(a, b))
        .map(child => createClaimPermissionChild(child, defaultHasPermission));

      return {
        ...createClaimPermissionGroup(claim, defaultHasPermission),
        children: children
      } as ClaimPermissionNode
    });
}

function createClaimPermissionGroup(claim: Claim, defaultHasPermission: boolean): ClaimPermissionNode {
  return {
    label: claim.value,
    hasPermission: defaultHasPermission,
    claim: claim,
    children: []
  } as ClaimPermissionNode;
}

function createClaimPermissionChild(claim: Claim, defaultHasPermission: boolean): ClaimPermissionNode {
  return {
    label: claim.type,
    hasPermission: defaultHasPermission,
    claim: claim,
    children: []
  } as ClaimPermissionNode;
}

function sortClaimsByType(a: Claim, b:Claim): number {
  return a.type < b.type 
    ? -1 
    : a.type > b.type 
      ? 1 
      : 0;
}

function sortClaimsByValue(a: Claim, b:Claim): number {
  return a.value < b.value 
    ? -1 
    : a.value > b.value 
      ? 1 
      : 0;
}
