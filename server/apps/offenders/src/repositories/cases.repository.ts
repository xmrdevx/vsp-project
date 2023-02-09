import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository, Case } from '@vsp/common';
import { ICasesRepository } from '../interfaces/cases-repository.interface';

@Injectable()
export class CasesRepository extends BaseRepository<Case, string> implements ICasesRepository {
  constructor(
    @InjectRepository(Case)
    protected readonly repository: Repository<Case>
  ) {
    super(repository);
  }
}
