import { BaseDto } from '../base.dto';
import { ClaimDto } from './claim.dto';
import { ProfileDto } from './profile.dto';
import { RoleDto } from './role.dto';
import { TenantDto } from './tenant.dto';

export class UserDto extends BaseDto {
  public username: string;
  public email: string;
  public isLockedOut: boolean;
  public profile: ProfileDto;
  public tenant: TenantDto;
  public roles: RoleDto[] | null | undefined;
  public claims: ClaimDto[] | null | undefined;

  constructor(obj: Partial<UserDto>) {
    super();
    Object.assign(this, obj);
  }
}
