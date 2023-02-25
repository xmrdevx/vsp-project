import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository, OffenderCase } from '@vsp/common';
import { IOffenderCasesRepository } from '../interfaces/offender-cases-repository.interface';

@Injectable()
export class OffenderCasesRepository extends BaseRepository<OffenderCase, string> implements IOffenderCasesRepository {
  constructor(
    @InjectRepository(OffenderCase)
    protected readonly repository: Repository<OffenderCase>
  ) {
    super(repository);
  }
}
