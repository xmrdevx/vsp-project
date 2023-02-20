import { BaseEntity } from '../base.entity';

export interface GeoLocation extends BaseEntity {
  latitude: number,
  longitude: number,
  location: any | null | undefined,
  fullAddressString: string | null | undefined,
}
