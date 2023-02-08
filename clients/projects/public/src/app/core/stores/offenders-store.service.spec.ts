import { TestBed } from '@angular/core/testing';

import { OffendersStore } from './offenders-store.service';

describe('OffendersStore', () => {
  let service: OffendersStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffendersStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
