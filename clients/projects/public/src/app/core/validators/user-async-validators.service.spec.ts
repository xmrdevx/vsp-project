import { TestBed } from '@angular/core/testing';

import { UserAsyncValidatorsService } from './user-async-validators.service';

describe('UserAsyncValidatorsService', () => {
  let service: UserAsyncValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAsyncValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
