import { IRepository, OffenderComment } from '@vsp/common';

export const OFFENDER_COMMENTS_REPOSITORY_TOKEN: string = 'OFFENDER_COMMENTS_REPOSITORY_TOKEN';

export interface IOffenderCommentsRepository extends IRepository<OffenderComment, string> { };
