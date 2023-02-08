import { TestBed } from '@angular/core/testing';

import { SelectedTeamProfileLoadedGuard } from './selected-team-profile-loaded.guard';

describe('SelectedTeamProfileLoadedGuard', () => {
  let guard: SelectedTeamProfileLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelectedTeamProfileLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
