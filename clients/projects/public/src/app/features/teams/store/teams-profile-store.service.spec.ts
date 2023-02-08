import { TestBed } from '@angular/core/testing';

import { TeamsProfileStoreService } from './teams-profile-store.service';

describe('TeamsProfileStoreService', () => {
  let service: TeamsProfileStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsProfileStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
