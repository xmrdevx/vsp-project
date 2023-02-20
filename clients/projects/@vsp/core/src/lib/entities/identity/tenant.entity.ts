import { Account } from './account.entity';
import { BaseEntity } from '../base.entity';

export interface Tenant extends BaseEntity {
  identifier: string | null | undefined,
  isLockedOut: boolean | null | undefined,
  accountId: string,
  account: Account | null | undefined
}
