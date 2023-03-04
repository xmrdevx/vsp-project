import { Test, TestingModule } from '@nestjs/testing';
import { AddressesRepository } from './addresses.repository';

describe('AddressesRepository', () => {
  let service: AddressesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressesRepository],
    }).compile();

    service = module.get<AddressesRepository>(AddressesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
