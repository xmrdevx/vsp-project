import { Test, TestingModule } from '@nestjs/testing';
import { OffendersService } from './offenders.service';

describe('OffendersService', () => {
  let service: OffendersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffendersService],
    }).compile();

    service = module.get<OffendersService>(OffendersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
