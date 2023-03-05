import { AddressDto } from '../shared';
import { MapCoordinateDto } from './map-coordinate.dto';

export class GeocodingLocationDto {
  public location: MapCoordinateDto;
  public fullAddressString: string  | null | undefined;
  public address: AddressDto | null | undefined;

  constructor(obj: Partial<GeocodingLocationDto>) {
    Object.assign(this, {
      location: new MapCoordinateDto({
        latitude: obj.location?.latitude,
        longitude: obj.location?.longitude
      }),
      fullAddressString: obj.fullAddressString,
      address: obj.address
    });
  }
}
