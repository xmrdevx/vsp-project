import { ClaimTypes } from '../enums/claim-types.enum';
import { UserDetails } from '../models/identity/user-details.model'
import { Claims } from '../types/claims.type';

export const claimsFromUserDetails = (user: UserDetails | null): Claims | null => {
  if (!user) return null;
  
  // Remaps claims for token
  const claimsMap = new Map<string, string[]>();
  user.claims.forEach((claim) => {
    if (claimsMap.has(claim.type)) {
      claimsMap.get(claim.type)?.push(claim.value);
    } else {
      claimsMap.set(claim.type, [claim.value]);
    }
  });

  return {
    [ClaimTypes.SUBJECT]: user.id,
    [ClaimTypes.FIRST_NAME]: user.firstName,
    [ClaimTypes.LAST_NAME]: user.lastName,
    [ClaimTypes.FULL_NAME]: `${user.firstName} ${user.lastName}`,
    [ClaimTypes.USERNAME]: user.username,
    [ClaimTypes.EMAIL]: user.email,
    [ClaimTypes.ACCOUNT_ID]: user.accountId,
    [ClaimTypes.TENANT_ID]: user.tenantId,
    [ClaimTypes.ROLES]: user?.roles || [],
    ...Object.fromEntries(claimsMap)
  } satisfies Claims;
};

export const userDetailsFromClaims = (claims: Claims | null): UserDetails | null => {
  if (!claims) return null;

  // @TODO will need to add additional claims user.claims

  return {
    id: claims[ClaimTypes.SUBJECT],
    firstName: claims[ClaimTypes.FIRST_NAME],
    lastName: claims[ClaimTypes.LAST_NAME],
    username: claims[ClaimTypes.USERNAME],
    email: claims[ClaimTypes.EMAIL],
    accountId: claims[ClaimTypes.ACCOUNT_ID],
    tenantId: claims[ClaimTypes.TENANT_ID],
    roles: claims[ClaimTypes.ROLES],
    claims: [],
    payload: claims
    // @TODO map claims here
  } satisfies UserDetails;
};
