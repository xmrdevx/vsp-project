import { MapCoordinateDto } from './map-coordinate.dto';

export class GeocodingLocationDto {
  public location: MapCoordinateDto;
  public fullAddressString: string;

  constructor(obj: any) {
    Object.assign(this, {
      location: new MapCoordinateDto({
        latitude: obj.location?.latitude,
        longitude: obj.location?.longitude
      } satisfies MapCoordinateDto),
      fullAddressString: obj.fullAddressString
    });
  }
}
