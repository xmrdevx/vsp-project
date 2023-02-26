import { OffenderCommentDto } from '../dtos/offenders';
import { OffenderComment } from '../entities/offenders/offender-comment.entity';
import { OffenderCommentLikeMapper } from './offender-comment-like.mapper';
import { UserMapper } from './user.mapper';

export class OffenderCommentMapper {
  public static toDto(entity: OffenderComment): OffenderCommentDto {
    return new OffenderCommentDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      message: entity.message,
      offenderId: entity.offenderId,
      commentedById: entity.commentedById,
      commentedBy: entity?.commentedBy ? UserMapper.toDto(entity.commentedBy) : undefined,
      commentLikes: entity?.commentLikes?.length 
        ? OffenderCommentLikeMapper.toDtoList(entity.commentLikes) 
        : undefined
    });
  }
  
  public static toDtoList(entities: OffenderComment[]): OffenderCommentDto[] {
    return entities.map(entity => OffenderCommentMapper.toDto(entity));
  }
  
  public static toEntity(dto: OffenderCommentDto): OffenderComment{
    // @TODO Not really needed as of right now.
    return new OffenderComment({
      
    });
  }

  public static toEntityList(dtos: OffenderCommentDto[]): OffenderComment[] {
    return dtos.map(dto => OffenderCommentMapper.toEntity(dto))
  }
}
