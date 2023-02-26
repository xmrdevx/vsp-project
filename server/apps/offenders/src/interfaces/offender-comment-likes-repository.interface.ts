import { IRepository, OffenderCommentLike } from '@vsp/common';

export const OFFENDER_COMMENT_LIKES_REPOSITORY_TOKEN: string = 'OFFENDER_COMMENT_LIKES_REPOSITORY_TOKEN';

export interface IOffenderCommentLikesRepository extends IRepository<OffenderCommentLike, string> { };
