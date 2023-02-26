import { Test, TestingModule } from '@nestjs/testing';
import { OffenderCommentsRepository } from './offender-comments.repository';

describe('OffenderCommentsRepository', () => {
  let service: OffenderCommentsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffenderCommentsRepository],
    }).compile();

    service = module.get<OffenderCommentsRepository>(OffenderCommentsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
