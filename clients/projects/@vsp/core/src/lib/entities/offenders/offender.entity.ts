import { BaseTrackedEntity } from '../base-tracked.entity';
import { OffenderCase } from './case.entity';

export interface Offender extends BaseTrackedEntity {
  firstName: string,
  lastName: string,
  avatarUrl: string | null | undefined,
  summary: string | null | undefined,
  cases: OffenderCase[] | null | undefined,
}
