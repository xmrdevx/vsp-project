import { Test, TestingModule } from '@nestjs/testing';
import { OffenderLinksService } from './offender-links.service';

describe('OffenderLinksService', () => {
  let service: OffenderLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffenderLinksService],
    }).compile();

    service = module.get<OffenderLinksService>(OffenderLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
