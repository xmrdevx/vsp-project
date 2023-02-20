import { BaseEntity } from '../base.entity';

export interface Claim extends BaseEntity {
  type: string,
  value: string,
  isSetByTenant: boolean | null | undefined
}
