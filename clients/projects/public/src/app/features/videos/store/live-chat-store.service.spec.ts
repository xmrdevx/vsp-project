import { TestBed } from '@angular/core/testing';

import { LiveChatStoreService } from './live-chat-store.service';

describe('LiveChatStoreService', () => {
  let service: LiveChatStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveChatStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
