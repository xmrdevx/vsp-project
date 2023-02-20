import { BaseEntity } from '../base.entity';
import { Claim } from './claim.entity';
import { Profile } from './profile.entity';
import { Role } from './role.entity';
import { Tenant } from './tenant.entity';

export interface User extends BaseEntity {
  username: string,
  email: string,
  profileId: string | null | undefined,
  profile: Profile | null | undefined,
  roles: Role[] | null | undefined,
  claims: Claim[] | null | undefined,
  tenantId: string | null | undefined,
  tenant: Tenant | null | undefined,
}
