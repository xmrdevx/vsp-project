import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository, OffenderComment } from '@vsp/common';
import { Repository } from 'typeorm';
import { IOffenderCommentsRepository } from '../interfaces/offender-comments-repository.interface';

@Injectable()
export class OffenderCommentsRepository
    extends BaseRepository<OffenderComment, string> implements IOffenderCommentsRepository {
  constructor(
    @InjectRepository(OffenderComment)
    protected readonly repository: Repository<OffenderComment>
  ) {
    super(repository);
  }
}
