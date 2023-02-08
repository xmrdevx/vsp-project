import { TestBed } from '@angular/core/testing';

import { SelectedWatchVideoLoadedGuard } from './selected-watch-video-loaded.guard';

describe('SelectedWatchVideoLoadedGuard', () => {
  let guard: SelectedWatchVideoLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelectedWatchVideoLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
