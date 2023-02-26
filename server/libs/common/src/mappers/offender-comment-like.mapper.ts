import { OffenderCommentLikeDto } from '../dtos/offenders/offender-comment-like.dto';
import { OffenderCommentLike } from '../entities/offenders/offender-comment-like.entity';
import { UserMapper } from './user.mapper';

export class OffenderCommentLikeMapper {
  public static toDto(entity: OffenderCommentLike): OffenderCommentLikeDto {
    return new OffenderCommentLikeDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      likedOn: entity.likedOn,
      likedById: entity.likedById,
      likedBy: entity?.likedBy ? UserMapper.toDto(entity.likedBy) : undefined,
      commentId: entity.commentId,
      isLiked: entity.isLiked
    });
  }
  
  public static toDtoList(entities: OffenderCommentLike[]): OffenderCommentLikeDto[] {
    return entities.map(entity => OffenderCommentLikeMapper.toDto(entity));
  }
  
  public static toEntity(dto: OffenderCommentLikeDto): OffenderCommentLike{
    // @TODO Not really needed as of right now.
    return new OffenderCommentLike({
      
    });
  }

  public static toEntityList(dtos: OffenderCommentLikeDto[]): OffenderCommentLike[] {
    return dtos.map(dto => OffenderCommentLikeMapper.toEntity(dto))
  }
}
