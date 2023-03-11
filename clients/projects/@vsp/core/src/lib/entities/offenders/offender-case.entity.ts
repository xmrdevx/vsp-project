import { Visibility } from '../../enums/visibility.enum';
import { CaseStatus } from '../../enums/case-status.enum';
import { BaseTrackedEntity } from '../base-tracked.entity';
import { GeoLocation } from '../geocoding/geo-location.entity';
import { Offender } from './offender.entity';
import { Tenant } from '../identity/tenant.entity';
import { Address } from '../shared/address.entity';

export interface OffenderCase extends BaseTrackedEntity {
  openedOn: Date,
  closedOn?: Date | null,
  status: CaseStatus,
  visibility: Visibility,
  summary: string | undefined | null,
  offenderId: string,
  offender?: Offender | undefined | null,
  caughtAtId?: string | undefined | null,
  caughtAt?: Address | undefined | null,
  tenantId?: string | undefined | null,
  tenant?: Tenant | undefined | null,
}
