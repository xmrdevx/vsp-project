import { IsNotEmpty } from 'class-validator';
import { BaseDto } from '../base.dto';
import { ProfileDto } from './profile.dto';
import { TenantDto } from './tenant.dto';

export class UserDto extends BaseDto {
  public username: string;
  public email: string;
  public profile: ProfileDto;
  public tenant: TenantDto;

  constructor(obj: Partial<UserDto>) {
    super();
    Object.assign(this, {
      id: obj?.id,
      createdOn: obj?.createdOn,
      updatedOn: obj?.updatedOn,
      username: obj?.username,
      email: obj?.email,
      tenant: new TenantDto(obj?.tenant || {}),
      profile: new ProfileDto(obj?.profile || {})
    });
  }
}
