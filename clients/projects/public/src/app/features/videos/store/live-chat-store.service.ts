import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

import { ChatState, ChatMessage, User } from '@vsp/core';
import { map, mergeMap, Observable, takeUntil } from 'rxjs';

import { LiveChatService } from '../../../core/services';

export interface LiveChatState {
  currentLiveChatState: ChatState
  currentChatMessages: ChatMessage[],
  currentChatUsers: User[],
}

export const initialLiveChatState: LiveChatState = {
  currentLiveChatState: ChatState.DISCONNECTED,
  currentChatMessages: [],
  currentChatUsers: [],
} as LiveChatState

@Injectable({
  providedIn: 'root'
})
export class LiveChatStore extends ComponentStore<LiveChatState> {
  private readonly _liveChatService: LiveChatService = inject(LiveChatService);

  public currentLiveChatState$: Observable<ChatState> = this.select(state => state.currentLiveChatState);
  public currentChatMessages$: Observable<ChatMessage[]> = this.select(state => state.currentChatMessages);

  private _currentChatUsers$: Observable<User[]> = this.select(state => state.currentChatUsers);
  
  public currentChatUsers$: Observable<User[]> = this.select(
    this._currentChatUsers$,
    (users) => users?.filter(user => user !== null && user !== undefined) || []
  );

  public currentAnonymousChatUsersCount$: Observable<number> = this.select(
    this._currentChatUsers$,
    users => users?.filter(user => user === null || user === undefined).length || 0
  );

  constructor() {
    super({ ...initialLiveChatState });
    this._listenForLiveChatStateChanges();
    this._listenForLiveChatMessagesChanges();
    this._listenForLiveChatUsersChanges();
  }

  public startLiveChat(liveId: string): void {
    this._liveChatService.startLiveChat(liveId);
  }

  public endLiveChat(): void {
    this._liveChatService.endLiveChat();
  }
  
  public sendMessage(chatMessage: ChatMessage): void {
    this._liveChatService.sendMessage(chatMessage);
  }

  private _listenForLiveChatStateChanges(): void {
    this._liveChatService
      .liveChatState$
      .pipe(takeUntil(this.destroy$))
      .subscribe(liveChatState => {
        console.log('setting live chat state ', liveChatState);
        this.setState((state: LiveChatState) => ({
          ...state,
          currentLiveChatState: liveChatState
        }));
      });
  }

  private _listenForLiveChatMessagesChanges(): void {
    this._liveChatService
      .chatMessage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(message => {
        this.setState((state: LiveChatState) => ({
          ...state,
          currentChatMessages: [...state.currentChatMessages, message]
        }));
      });
  }

  private _listenForLiveChatUsersChanges(): void {
    this._liveChatService
      .chatUsers$
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => {
        this.setState((state: LiveChatState) => ({
          ...state,
          currentChatUsers: users
        }));
      });
  }
}
