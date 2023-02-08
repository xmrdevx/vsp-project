import { Test, TestingModule } from '@nestjs/testing';
import { GeocodingController } from './geocoding.controller';
import { GeocodingService } from '../services/geocoding.service';

describe('GeocodingController', () => {
  let geocodingController: GeocodingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GeocodingController],
      providers: [GeocodingService],
    }).compile();

    geocodingController = app.get<GeocodingController>(GeocodingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      //expect(geocodingController.getHello()).toBe('Hello World!');
    });
  });
});
