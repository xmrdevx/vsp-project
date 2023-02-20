import { BaseEntity } from '../base.entity';
import { Claim } from './claim.entity';

export interface Role extends BaseEntity {
  name: string,
  claims: Claim[] | null | undefined
}
