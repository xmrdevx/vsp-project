import { BaseDto } from '../base.dto';
import { AddressDto } from './address.dto';

export class ProfileDto extends BaseDto {
  public firstName: string;
  public lastName: string;
  public summary: string | null | undefined;
  public avatarUrl: string | null | undefined;
  public address: AddressDto | null | undefined;

  constructor(obj: Partial<ProfileDto>) {
    super();
    Object.assign(this, {
      id: obj?.id,
      createdOn: obj?.createdOn,
      updatedOn: obj?.updatedOn,
      firstName: obj?.firstName,
      lastName: obj?.lastName,
      summary: obj?.summary,
      avatarUrl: obj?.avatarUrl,
      address: new AddressDto(obj?.address || {})
    });
  }
}
