import { UserAddress } from './address.entity';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

export interface Profile extends BaseEntity {
  firstName: string,
  lastName: string,
  summary: string | null | undefined,
  avatarUrl: string | null | undefined,
  addressId: string,
  address: UserAddress | null | undefined
  user: User | null | undefined
}
