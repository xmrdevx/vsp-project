import { BaseTrackedEntity } from '../base-tracked.entity';
import { Case } from './case.entity';

export interface Offender extends BaseTrackedEntity {
  firstName: string,
  lastName: string,
  avatarUrl: string | null | undefined,
  summary: string | null | undefined,
  cases: Case[] | null | undefined,
}
