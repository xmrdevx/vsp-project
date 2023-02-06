import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository, StreamKey } from '@vsp/common';

import { IStreamKeysRepository } from '../interfaces/stream-keys-repository.interface';

@Injectable()
export class StreamKeysRepository extends BaseRepository<StreamKey, string> implements IStreamKeysRepository {
  constructor(
    @InjectRepository(StreamKey)
    protected readonly repository: Repository<StreamKey>
  ) {
    super(repository);
  }
}
