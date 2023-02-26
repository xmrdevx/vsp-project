import { Test, TestingModule } from '@nestjs/testing';
import { OffenderCommentsController } from './offender-comments.controller';

describe('OffenderCommentsController', () => {
  let controller: OffenderCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffenderCommentsController],
    }).compile();

    controller = module.get<OffenderCommentsController>(OffenderCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
