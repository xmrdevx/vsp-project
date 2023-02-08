import { MapCoordinateDto } from './map-coordinate.dto';

export class MapMarkerDto<T> {
  public coordinate: MapCoordinateDto;
  public payload: T;

  constructor(obj: any) {
    Object.assign(this, {
      coordinate: new MapCoordinateDto({
        latitude: obj.coordinate?.latitude,
        longitude: obj.coordinate?.longitude
      }),
      payload: obj.payload
    } satisfies MapMarkerDto<T>);
  }
}