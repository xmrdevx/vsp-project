import { Test, TestingModule } from '@nestjs/testing';
import { OffenderCasesRepository } from './offender-cases.repository';

describe('OffenderCasesRepository', () => {
  let service: OffenderCasesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffenderCasesRepository],
    }).compile();

    service = module.get<OffenderCasesRepository>(OffenderCasesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
