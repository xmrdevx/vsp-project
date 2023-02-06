import { ClaimDto } from '@vsp/common';

export const PERMISSIONS_SERVICE_TOKEN: string = 'PERMISSIONS_SERVICE_TOKEN';

export interface IPermissionsService {
  getAvailablePermissions(): Promise<ClaimDto[]>,
}
