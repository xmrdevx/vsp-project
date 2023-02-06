import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository, StreamKey } from '@vsp/common';

import { IStreamKeyRepository } from '../interfaces/stream-key-repository.interface';

@Injectable()
export class StreamKeysRepository extends BaseRepository<StreamKey, string> implements IStreamKeyRepository {
  constructor(
    @InjectRepository(StreamKey)
    protected readonly repository: Repository<StreamKey>
  ) {
    super(repository);
  }
}
