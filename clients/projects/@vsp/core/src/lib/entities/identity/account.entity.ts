import { BaseEntity } from '../base.entity';

export interface Account extends BaseEntity {
  identifier: string | null | undefined,
  name: string
}
