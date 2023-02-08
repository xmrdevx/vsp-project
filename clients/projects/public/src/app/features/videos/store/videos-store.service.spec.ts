import { TestBed } from '@angular/core/testing';

import { VideosStoreService } from './videos-store.service';

describe('VideosStoreService', () => {
  let service: VideosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
