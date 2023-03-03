import { BaseDto } from '../base.dto';

export class UserAddressDto extends BaseDto {
  public street: string | null | undefined;
  public street2: string | null | undefined;
  public city: string | null | undefined;
  public state: string | null | undefined;
  public zip: string | null | undefined;
  public country: string | null | undefined;
  public latitude: number | null | undefined;
  public longitude: number | null | undefined;

  constructor(obj: Partial<UserAddressDto>) {
    super();
    Object.assign(this, obj);
  }
}