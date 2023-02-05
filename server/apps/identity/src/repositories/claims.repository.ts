import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository, Claim } from '@vsp/common';
import { IClaimsRepository } from '../interfaces/claims-repository.interface';

@Injectable()
export class ClaimsRepository extends BaseRepository<Claim, string> implements IClaimsRepository {
  constructor(
    @InjectRepository(Claim)
    protected readonly repository: Repository<Claim>
  ) {
    super(repository);
  }
}
