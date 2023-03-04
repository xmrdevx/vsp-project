import { Test, TestingModule } from '@nestjs/testing';
import { LinksRepository } from './links.repository';

describe('LinksRepository', () => {
  let service: LinksRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinksRepository],
    }).compile();

    service = module.get<LinksRepository>(LinksRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
