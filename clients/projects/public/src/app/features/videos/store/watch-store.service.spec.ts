import { TestBed } from '@angular/core/testing';

import { WatchStoreService } from './watch-store.service';

describe('WatchStoreService', () => {
  let service: WatchStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
