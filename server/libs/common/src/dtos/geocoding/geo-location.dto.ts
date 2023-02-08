import { BaseDto } from '../base.dto'

export class GeoLocationDto extends BaseDto {
  public fullAddressString: string;
  public latitude: number;
  public longitude: number;

  constructor(args: any) {
    super();
    Object.assign(this, {
      id: args.id,
      createdAt: args.createdAt,
      updatedAt: args.updatedAt,
      fullAddressString: args?.fullAddressString,
      latitude: args?.latitude,
      longitude: args?.longitude
    } satisfies GeoLocationDto);
  }
}
