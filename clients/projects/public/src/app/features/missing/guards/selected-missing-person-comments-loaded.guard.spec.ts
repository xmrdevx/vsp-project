import { TestBed } from '@angular/core/testing';

import { SelectedMissingPersonCommentsLoadedGuard } from './selected-missing-person-comments-loaded.guard';

describe('SelectedMissingPersonCommentsLoadedGuard', () => {
  let guard: SelectedMissingPersonCommentsLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelectedMissingPersonCommentsLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
