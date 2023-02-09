import { Test, TestingModule } from '@nestjs/testing';
import { OffendersRepository } from './offenders.repository';

describe('OffendersRepository', () => {
  let service: OffendersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffendersRepository],
    }).compile();

    service = module.get<OffendersRepository>(OffendersRepository);
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
