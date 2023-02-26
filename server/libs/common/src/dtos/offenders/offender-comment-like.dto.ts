import { BaseDto } from '../base.dto';
import { UserDto } from '../identity';

export class OffenderCommentLikeDto extends BaseDto {
  public likedOn: Date;
  public likedById: string;
  public likedBy: UserDto | null | undefined;
  public commentId: string;
  public isLiked: boolean;

  constructor(obj: Partial<OffenderCommentLikeDto>) {
    super();
    Object.assign(this, obj);
  }
}
