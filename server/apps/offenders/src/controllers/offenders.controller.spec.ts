import { Test, TestingModule } from '@nestjs/testing';
import { OffendersController } from './offenders.controller';
import { OffendersService } from '../services/offenders.service';

describe('OffendersController', () => {
  let offendersController: OffendersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OffendersController],
      providers: [OffendersService],
    }).compile();

    offendersController = app.get<OffendersController>(OffendersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(offendersController.getHello()).toBe('Hello World!');
    });
  });
});
