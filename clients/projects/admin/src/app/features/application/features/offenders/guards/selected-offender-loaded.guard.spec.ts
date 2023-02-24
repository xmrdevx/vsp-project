import { TestBed } from '@angular/core/testing';

import { SelectedOffenderLoadedGuard } from './selected-offender-loaded.guard';

describe('SelectedOffenderLoadedGuard', () => {
  let guard: SelectedOffenderLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelectedOffenderLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
