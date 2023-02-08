import { TestBed } from '@angular/core/testing';

import { ExploreStore } from './explore-store.service';

describe('ExploreStore', () => {
  let service: ExploreStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
