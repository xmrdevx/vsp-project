import { Test, TestingModule } from '@nestjs/testing';
import { CasesRepository } from './cases.repository';

describe('CasesRepository', () => {
  let service: CasesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CasesRepository],
    }).compile();

    service = module.get<CasesRepository>(CasesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
