import { TestBed } from '@angular/core/testing';

import { InitialOffendersSearchLoadedGuard } from './initial-offenders-search-loaded.guard';

describe('InitialOffendersSearchLoadedGuard', () => {
  let guard: InitialOffendersSearchLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InitialOffendersSearchLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
