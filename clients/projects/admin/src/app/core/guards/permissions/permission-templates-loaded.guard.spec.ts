import { TestBed } from '@angular/core/testing';

import { PermissionTemplatesLoadedGuard } from './permission-templates-loaded.guard';

describe('PermissionTemplatesLoadedGuard', () => {
  let guard: PermissionTemplatesLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionTemplatesLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
