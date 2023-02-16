import { MapCoordinateDto } from './map-coordinate.dto';

export class MapMarkerDto<T> {
  public coordinate: MapCoordinateDto;
  public payload: T | void | null | undefined;

  constructor(obj: Partial<MapMarkerDto<T>>) {
    Object.assign(this, {
      coordinate: new MapCoordinateDto({
        latitude: obj.coordinate?.latitude,
        longitude: obj.coordinate?.longitude
      }),
      payload: obj.payload
    });
  }
}
