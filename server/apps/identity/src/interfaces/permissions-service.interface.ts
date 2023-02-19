import { ClaimDto } from '@vsp/common';

export const PERMISSIONS_SERVICE_TOKEN: string = 'PERMISSIONS_SERVICE_TOKEN';

/**
 * An interface contract for accessing permission claims assigneable to a user.
 * @interface
 */
export interface IPermissionsService {
  /**
   * Gets all available claim permissions assigable to a users
   * @returns The permission claims assignable to a users.
   */
  getAvailablePermissions(): Promise<ClaimDto[]>,
}
