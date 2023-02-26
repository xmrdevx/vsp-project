import { BaseDto } from '../base.dto';
import { UserDto } from '../identity';
import { OffenderCommentLikeDto } from './offender-comment-like.dto';

export class OffenderCommentDto extends BaseDto {
  public message: string;
  public offenderId: string;
  public commentedById: string;
  public commentedBy: UserDto;
  public parentId: string;
  public commentLikes: OffenderCommentLikeDto[] | null | undefined;
  
  constructor(obj: Partial<OffenderCommentDto>) {
    super();
    Object.assign(this, obj);
  }
}
