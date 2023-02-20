import { TestBed } from '@angular/core/testing';

import { AvailablePermissionsLoadedGuard } from './available-permissions-loaded.guard';

describe('AvailablePermissionsLoadedGuard', () => {
  let guard: AvailablePermissionsLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AvailablePermissionsLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
