import { MapBoundsDto } from '../geocoding/map-bounds.dto';

export class GetOffenderCaseMarkersByBoundsRequest {
  public mapBounds: MapBoundsDto;

  constructor(obj: any) {
    Object.assign(this, { mapBounds: obj.mapBounds });
  }
}
