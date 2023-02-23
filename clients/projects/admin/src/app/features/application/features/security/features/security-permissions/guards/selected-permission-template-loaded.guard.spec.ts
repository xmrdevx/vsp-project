import { TestBed } from '@angular/core/testing';

import { SelectedPermissionTemplateLoadedGuard } from './selected-permission-template-loaded.guard';

describe('SelectedPermissionTemplateLoadedGuard', () => {
  let guard: SelectedPermissionTemplateLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelectedPermissionTemplateLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
