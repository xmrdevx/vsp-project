import { MediaType, MediaVisibility } from '../models';
import { BaseEntity } from './base.entity';
import { OffenderCase } from './offenders/offender-case.entity';
import { User } from './identity/user.entity';

export interface Media extends BaseEntity {
  title: string,
  description: string,
  srcUrl: string,
  thumbnailSrcUrl: string,
  type: MediaType,
  visibility: MediaVisibility,
  uploadedById: string,
  caseId?: string,

  case?: OffenderCase,
  uploadedBy?: User,
}
