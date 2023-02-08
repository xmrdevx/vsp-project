import { TestBed } from '@angular/core/testing';

import { GeocodingStoreService } from './geocoding-store.service';

describe('GeocodingStoreService', () => {
  let service: GeocodingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeocodingStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
