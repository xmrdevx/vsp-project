import { Inject, Injectable } from '@nestjs/common';
import { CreateOffenderCommentDto, IPageable, OffenderComment, OffenderCommentDto, OffenderCommentMapper, OffenderCommentsSearchFilter, Page } from '@vsp/common';
import { ILike } from 'typeorm';
import { IOffenderCommentLikesRepository, OFFENDER_COMMENT_LIKES_REPOSITORY_TOKEN } from '../interfaces/offender-comment-likes-repository.interface';
import { IOffenderCommentsRepository, OFFENDER_COMMENTS_REPOSITORY_TOKEN } from '../interfaces/offender-comments-repository.interface';
import { IOffenderCommentsService } from '../interfaces/offender-comments-service.interface';

@Injectable()
export class OffenderCommentsService implements IOffenderCommentsService {
  @Inject(OFFENDER_COMMENTS_REPOSITORY_TOKEN)
  private readonly _offenderCommentsRepository: IOffenderCommentsRepository;

  @Inject(OFFENDER_COMMENT_LIKES_REPOSITORY_TOKEN)
  private readonly _offenderCommentLikeRepository: IOffenderCommentLikesRepository;

  public async createComment(
    offenderId: string, createOffenderCommentDto: CreateOffenderCommentDto
  ): Promise<OffenderCommentDto> {
    return OffenderCommentMapper.toDto(
      await this._offenderCommentsRepository
        .save(this._offenderCommentsRepository.create({ ...createOffenderCommentDto, offenderId }))
    );
  }

  public async searchComments(
    offenderId: string, 
    offenderCommentsSearchFilter: OffenderCommentsSearchFilter,
    pageable: IPageable
  ): Promise<Page<OffenderCommentDto>> {
    const queryString: string | undefined = offenderCommentsSearchFilter?.query?.trim()?.length 
      ? offenderCommentsSearchFilter?.query?.trim()
      : undefined;

    const [comments, count]: [comments: OffenderComment[], count: number] = await this._offenderCommentsRepository
      .findByPageable(pageable, {
        where: {
          offenderId: offenderId,
          message: queryString ? ILike(`%${queryString}%`) : undefined
        }
      })

    return new Page<OffenderCommentDto>(OffenderCommentMapper.toDtoList(comments), count, pageable);
  }
}
