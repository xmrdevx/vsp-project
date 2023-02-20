import { DistanceUnit } from '../../enums/distance-unit.enum';
import { GeocodingLocation } from '../maps/map.model';

export interface OffendersSearchFilter {
  query?: string,
  location?: GeocodingLocation | null,
  distance?: number,
  distanceUnit?: DistanceUnit 
}
