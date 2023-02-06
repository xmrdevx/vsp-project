import { Test, TestingModule } from '@nestjs/testing';
import { StreamsController } from './streams.controller';
import { StreamsService } from '../services/streams.service';

describe('StreamsController', () => {
  let streamsController: StreamsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StreamsController],
      providers: [StreamsService],
    }).compile();

    streamsController = app.get<StreamsController>(StreamsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(streamsController.getHello()).toBe('Hello World!');
    });
  });
});
