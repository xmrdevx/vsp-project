import { BaseDto } from '../base.dto'

export class GeoLocationDto extends BaseDto {
  public fullAddressString: string;
  public latitude: number;
  public longitude: number;

  constructor(args: any) {
    super();
    Object.assign(this, {
      id: args.id,
      createdOn: args.createdOn,
      updatedOn: args.updatedOn,
      fullAddressString: args?.fullAddressString,
      latitude: args?.latitude,
      longitude: args?.longitude
    } satisfies GeoLocationDto);
  }
}
