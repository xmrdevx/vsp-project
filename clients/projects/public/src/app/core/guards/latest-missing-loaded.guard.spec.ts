import { TestBed } from '@angular/core/testing';

import { LatestMissingLoadedGuard } from './latest-missing-loaded.guard';

describe('LatestMissingLoadedGuard', () => {
  let guard: LatestMissingLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LatestMissingLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
