import { MediaType, MediaVisibility } from '../models';
import { BaseEntity } from './base.entity';
import { Case } from './case.entity';
import { User } from './user.entity';

export interface Media extends BaseEntity {
  title: string,
  description: string,
  srcUrl: string,
  thumbnailSrcUrl: string,
  type: MediaType,
  visibility: MediaVisibility,
  uploadedById: string,
  caseId?: string,

  case?: Case,
  uploadedBy?: User,
}
