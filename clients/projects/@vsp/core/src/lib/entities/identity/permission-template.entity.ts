import { BaseTrackedEntity } from '../base-tracked.entity';
import { Claim } from './claim.entity';

export interface PermissionTemplate extends BaseTrackedEntity {
  name: string,
  description: string | null | undefined,
  claims: Claim[] | null |  undefined
}
