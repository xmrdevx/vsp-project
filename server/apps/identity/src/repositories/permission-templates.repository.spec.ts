import { Test, TestingModule } from '@nestjs/testing';
import { PermissionTemplatesRepository } from './permission-templates.repository';

describe('PermissionTemplatesRepository', () => {
  let service: PermissionTemplatesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionTemplatesRepository],
    }).compile();

    service = module.get<PermissionTemplatesRepository>(PermissionTemplatesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
