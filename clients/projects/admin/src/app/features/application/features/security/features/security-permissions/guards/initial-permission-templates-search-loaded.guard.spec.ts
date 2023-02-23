import { TestBed } from '@angular/core/testing';

import { InitialPermissionTemplatesSearchLoadedGuard } from './initial-permission-templates-search-loaded.guard';

describe('InitialPermissionTemplatesSearchLoadedGuard', () => {
  let guard: InitialPermissionTemplatesSearchLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InitialPermissionTemplatesSearchLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
