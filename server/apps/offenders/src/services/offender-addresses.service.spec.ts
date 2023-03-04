import { Test, TestingModule } from '@nestjs/testing';
import { OffenderAddressesService } from './offender-addresses.service';

describe('OffenderAddressesService', () => {
  let service: OffenderAddressesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffenderAddressesService],
    }).compile();

    service = module.get<OffenderAddressesService>(OffenderAddressesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
