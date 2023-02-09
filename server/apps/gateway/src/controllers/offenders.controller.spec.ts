import { Test, TestingModule } from '@nestjs/testing';
import { OffendersController } from './offenders.controller';

describe('OffendersController', () => {
  let controller: OffendersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffendersController],
    }).compile();

    controller = module.get<OffendersController>(OffendersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
