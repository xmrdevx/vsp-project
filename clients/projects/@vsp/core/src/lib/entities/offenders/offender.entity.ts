import { BaseTrackedEntity } from '../base-tracked.entity';
import { Address } from '../shared/address.entity';
import { Link } from '../shared/link.entity';
import { OffenderCase } from './offender-case.entity';

export interface Offender extends BaseTrackedEntity {
  firstName: string,
  lastName: string,
  avatarUrl: string | null | undefined,
  summary: string | null | undefined,
  cases: OffenderCase[] | null | undefined,
  addresses: Address[] | null | undefined,
  links: Link[] | null | undefined
}
