import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Link } from '../entities/shared/link.entity';
import { ILinksRepository } from '../interfaces/link-repository.interface';
import { BaseRepository } from './base.repository';

@Injectable()
export class LinksRepository extends BaseRepository<Link, string> implements ILinksRepository {
  constructor(
    @InjectRepository(Link)
    protected readonly repository: Repository<Link>
  ) {
    super(repository);
  }
}
