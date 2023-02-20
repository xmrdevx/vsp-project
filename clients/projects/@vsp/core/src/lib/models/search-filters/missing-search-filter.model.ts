import { DistanceUnit } from '../../enums/distance-unit.enum';
import { GeocodingLocation } from '../maps/map.model';

export interface MissingSearchFilter {
  searchTerm?: string,
  location?: GeocodingLocation | null,
  distance?: number,
  distanceUnit?: DistanceUnit 
}
