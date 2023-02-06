import { Test, TestingModule } from '@nestjs/testing';
import { StreamKeysRepository } from './stream-keys.repository';

describe('StreamKeysService', () => {
  let service: StreamKeysRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamKeysRepository],
    }).compile();

    service = module.get<StreamKeysRepository>(StreamKeysRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
