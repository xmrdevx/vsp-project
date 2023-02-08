import { BaseEntity } from './base.entity';
import { GeoLocation } from './geo-location.entity';
import { Person } from './person.entity';

export interface MissingPerson extends BaseEntity {
  summary: string,
  reportedMissingOn: Date,
  lastSeenOn: Date,
  personId: string,
  lastSeenAtId: string,
  person?: Person,
  lastSeenAt?: GeoLocation
}
