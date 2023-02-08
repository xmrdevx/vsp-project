import { Test, TestingModule } from '@nestjs/testing';
import { MyPvtGeocodingApiClientService } from './my-pvt-geocoding-api-client.service';

describe('MyPvtGeocodingApiClientService', () => {
  let service: MyPvtGeocodingApiClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyPvtGeocodingApiClientService],
    }).compile();

    service = module.get<MyPvtGeocodingApiClientService>(MyPvtGeocodingApiClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
