import { Test, TestingModule } from '@nestjs/testing';
import { OffenderLinksController } from './offender-links.controller';

describe('OffenderLinksController', () => {
  let controller: OffenderLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffenderLinksController],
    }).compile();

    controller = module.get<OffenderLinksController>(OffenderLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
