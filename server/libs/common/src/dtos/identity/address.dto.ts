import { BaseDto } from '../base.dto';
import { UserDto } from './user.dto';

export class AddressDto extends BaseDto {
  public street: string;
  public street2: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;

  constructor(obj: Partial<AddressDto>) {
    super();
    Object.assign(this, {
      id: obj?.id,
      createdOn: obj?.createdOn,
      updatedOn: obj?.updatedOn,
      street: obj?.street,
      street2: obj?.street2,
      city: obj?.city,
      state: obj?.state,
      zip: obj?.zip,
      country: obj?.country
    });
  }
}