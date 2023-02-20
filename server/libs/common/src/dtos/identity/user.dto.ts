import { IsNotEmpty } from 'class-validator';
import { BaseDto } from '../base.dto';
import { ProfileDto } from './profile.dto';
import { TenantDto } from './tenant.dto';

export class UserDto extends BaseDto {
  public username: string;
  public email: string;
  public isLockedOut: boolean;
  public profile: ProfileDto;
  public tenant: TenantDto;

  constructor(obj: Partial<UserDto>) {
    super();
    Object.assign(this, obj);
  }
}
