import { BaseDto } from '../base.dto'

export class GeoLocationDto extends BaseDto {
  public fullAddressString: string;
  public latitude: number;
  public longitude: number;

  constructor(obj: Partial<GeoLocationDto>) {
    super();
    Object.assign(this, obj);
  }
}
