import { Test, TestingModule } from '@nestjs/testing';
import { OffenderCommentLikesRepository } from './offender-comment-likes.repository';

describe('OffenderCommentLikesRepository', () => {
  let service: OffenderCommentLikesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffenderCommentLikesRepository],
    }).compile();

    service = module.get<OffenderCommentLikesRepository>(OffenderCommentLikesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
