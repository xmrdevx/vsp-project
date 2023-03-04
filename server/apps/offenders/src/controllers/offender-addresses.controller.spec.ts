import { Test, TestingModule } from '@nestjs/testing';
import { OffenderAddressesController } from './offender-addresses.controller';

describe('OffenderAddressesController', () => {
  let controller: OffenderAddressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffenderAddressesController],
    }).compile();

    controller = module.get<OffenderAddressesController>(OffenderAddressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
