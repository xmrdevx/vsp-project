import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository, PermissionTemplate } from '@vsp/common';
import { Repository } from 'typeorm';

import { IPermissionTemplatesRepository } from '../interfaces/permission-template-repository.interface';

@Injectable()
export class PermissionTemplatesRepository 
    extends BaseRepository<PermissionTemplate, string> 
    implements IPermissionTemplatesRepository {
  constructor(
    @InjectRepository(PermissionTemplate)
    protected readonly repository: Repository<PermissionTemplate>
  ) {
    super(repository);
  }
}
