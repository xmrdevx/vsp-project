import { TestBed } from '@angular/core/testing';

import { InitialOffenderCommentSearchLoadedGuard } from './initial-offender-comment-search-loaded.guard';

describe('InitialOffenderCommentSearchLoadedGuard', () => {
  let guard: InitialOffenderCommentSearchLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InitialOffenderCommentSearchLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
