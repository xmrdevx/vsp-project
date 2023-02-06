import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository, Stream } from '@vsp/common';
import { IStreamsRepository } from '../interfaces/streams-repository.interface';

@Injectable()
export class StreamsRepository extends BaseRepository<Stream, string> implements IStreamsRepository{
  constructor(
    @InjectRepository(Stream)
    protected readonly repository: Repository<Stream>
  ) {
    super(repository);
  }
}
