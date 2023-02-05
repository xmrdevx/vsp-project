import { Test, TestingModule } from '@nestjs/testing';
import { ClaimsRepository } from './claims.repository';

describe('ClaimsRepository', () => {
  let service: ClaimsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaimsRepository],
    }).compile();

    service = module.get<ClaimsRepository>(ClaimsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
