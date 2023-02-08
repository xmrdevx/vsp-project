import { TestBed } from '@angular/core/testing';

import { TeamsStore } from './teams-store.service';

describe('TeamsStore', () => {
  let service: TeamsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
