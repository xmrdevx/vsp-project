import { CaseStatus } from '../models';
import { BaseEntity } from './base.entity';
import { GeoLocation } from './geo-location.entity';
import { Offender } from './offender.entity';
import { Tenant } from './tenant.entity';

export interface Case extends BaseEntity {
  openedOn: Date,
  closedOn: Date,
  status: CaseStatus,
  summary: string,
  offenderId: string,
  offender?: Offender,
  caughtAtId?: string,
  caughtAt?: GeoLocation,
  tenantId: string,
  tenant: Tenant,
}
