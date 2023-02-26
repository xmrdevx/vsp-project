import { Test, TestingModule } from '@nestjs/testing';
import { OffenderCommentsService } from './offender-comments.service';

describe('OffenderCommentsService', () => {
  let service: OffenderCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffenderCommentsService],
    }).compile();

    service = module.get<OffenderCommentsService>(OffenderCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
