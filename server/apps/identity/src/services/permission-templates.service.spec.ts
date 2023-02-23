import { Test, TestingModule } from '@nestjs/testing';
import { PermissionTemplatesService } from './permission-templates.service';

describe('PermissionTemplatesService', () => {
  let service: PermissionTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionTemplatesService],
    }).compile();

    service = module.get<PermissionTemplatesService>(PermissionTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
