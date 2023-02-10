import { DistanceUnit } from '@vsp/common/enums/distance-unit.enum'
import { MapCoordinateDto } from '../geocoding/map-coordinate.dto';

export class OffendersSearchFilter {
  public query: string | null;
  public location: MapCoordinateDto | null;
  public distance: number | null;
  public distanceUnit: DistanceUnit | null;

  constructor(obj: any) {
    Object.assign(this, { 
      query: obj?.query || null,
      location: obj?.location ? new MapCoordinateDto(obj.location) : null,
      distance: obj?.distance || null,
      distanceUnit: obj?.distanceUnit || null
    } satisfies OffendersSearchFilter);
  }
}
