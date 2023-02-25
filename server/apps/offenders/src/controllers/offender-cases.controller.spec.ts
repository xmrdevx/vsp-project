import { Test, TestingModule } from '@nestjs/testing';
import { OffenderCasesController } from './offender-cases.controller';

describe('OffenderCasesController', () => {
  let controller: OffenderCasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffenderCasesController],
    }).compile();

    controller = module.get<OffenderCasesController>(OffenderCasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
