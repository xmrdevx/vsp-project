import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from './base.repository';
import { Address } from '../entities/shared/address.entity';
import { IAddressesRepository } from '../interfaces/addresses-repository.interface';

@Injectable()
export class AddressesRepository extends BaseRepository<Address, string> implements IAddressesRepository {
  constructor(
    @InjectRepository(Address)
    protected readonly repository: Repository<Address>
  ) {
    super(repository);
  }
}
