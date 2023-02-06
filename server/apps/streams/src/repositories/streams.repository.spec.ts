import { Test, TestingModule } from '@nestjs/testing';
import { StreamsRepository } from './streams.repository';

describe('StreamsRepository', () => {
  let service: StreamsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamsRepository],
    }).compile();

    service = module.get<StreamsRepository>(StreamsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
