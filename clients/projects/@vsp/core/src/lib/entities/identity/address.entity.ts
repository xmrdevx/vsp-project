import { BaseEntity } from '../base.entity';

export interface Address extends BaseEntity {
  street: string | null | undefined,
  street2: string | null | undefined,
  city: string | null | undefined,
  state: string | null | undefined,
  zip: string | null | undefined,
  country: string | null | undefined,
}
