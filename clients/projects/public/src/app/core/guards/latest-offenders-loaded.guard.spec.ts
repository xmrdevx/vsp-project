import { TestBed } from '@angular/core/testing';

import { LatestOffendersLoadedGuard } from './latest-offenders-loaded.guard';

describe('LatestOffendersLoadedGuard', () => {
  let guard: LatestOffendersLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LatestOffendersLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
