import { BaseEntity } from './base.entity';

export interface GeoLocation extends BaseEntity {
  id: string,
  latitude: number,
  longitude: number,
  location: any,
  fullAddressString: string,
}
