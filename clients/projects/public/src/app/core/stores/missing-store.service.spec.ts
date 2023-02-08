import { TestBed } from '@angular/core/testing';

import { MissingStore } from './missing-store.service';

describe('MissingStore', () => {
  let service: MissingStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissingStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
