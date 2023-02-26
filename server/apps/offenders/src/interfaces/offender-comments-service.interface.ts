import { CreateOffenderCommentDto, IPageable, OffenderCommentDto, OffenderCommentsSearchFilter, Page } from '@vsp/common';

export const OFFENDER_COMMENTS_SERVICE_TOKEN: string = 'OFFENDER_COMMENTS_SERVICE_TOKEN';

export interface IOffenderCommentsService {
  /**
   * Creates a comment on an offender's profile.
   * @param {string} offenderId The id of the offender
   * @param {CreateOffenderCommentDto} createOffenderCommentDto The comment to create.
   * @returns {OffenderCommentDto} The newly created comment.
   * @abstract
   * @async
   */
  createComment(offenderId: string, createOffenderCommentDto: CreateOffenderCommentDto): Promise<OffenderCommentDto>;

  /**
   * Searches an offenders comments and return a page slice of the resutls.
   * @param offenderId The offender id of the comments to search
   * @param offenderCommentsSearchFilter The offender filter to apply to the search.
   * @param {IPageable} The details for the page slice to fetch.
   * @returns {} A page slice of the search results
   */
  searchComments(
    offenderId: string, 
    offenderCommentsSearchFilter: OffenderCommentsSearchFilter,
    pageable: IPageable): Promise<Page<OffenderCommentDto>>;
}
