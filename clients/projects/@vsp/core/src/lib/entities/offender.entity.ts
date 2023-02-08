import { BaseEntity } from './base.entity';
import { Case } from './case.entity';

export interface Offender extends BaseEntity {
  firstName: string,
  lastName: string,
  avatarUrl?: string,
  summary?: string,
  cases?: Case[],
}
