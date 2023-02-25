import { Test, TestingModule } from '@nestjs/testing';
import { OffenderCasesService } from './offender-cases.service';

describe('OffenderCasesService', () => {
  let service: OffenderCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffenderCasesService],
    }).compile();

    service = module.get<OffenderCasesService>(OffenderCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
