import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository, OffenderCommentLike } from '@vsp/common';
import { Repository } from 'typeorm';
import { IOffenderCommentLikesRepository } from '../interfaces/offender-comment-likes-repository.interface';

@Injectable()
export class OffenderCommentLikesRepository 
    extends BaseRepository<OffenderCommentLike, string> implements IOffenderCommentLikesRepository {
  constructor(
    @InjectRepository(OffenderCommentLike)
    protected readonly repository: Repository<OffenderCommentLike>
  ) {
    super(repository);
  }
}
