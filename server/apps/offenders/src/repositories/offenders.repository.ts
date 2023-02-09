import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository, Offender } from '@vsp/common';
import { IOffendersRepository } from '../interfaces/offenders-repository.interface';

@Injectable()
export class OffendersRepository extends BaseRepository<Offender, string> implements IOffendersRepository {
  constructor(
    @InjectRepository(Offender)
    protected readonly repository: Repository<Offender>
  ) {
    super(repository);
  }
}
