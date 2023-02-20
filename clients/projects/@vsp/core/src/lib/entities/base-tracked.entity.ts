import { BaseEntity } from './base.entity';
import { User } from './identity/user.entity';

export interface BaseTrackedEntity extends BaseEntity {
  createdById: string,
  createdBy?: User | null | undefined,
  updatedById: string,
  updatedBy: User | null | undefined,
  deletedById: string,
  deletedBy: User | null | undefined
}
