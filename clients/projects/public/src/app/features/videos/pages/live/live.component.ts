import { Component, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, JsonPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { VspIfAuthenticatedDirective } from '@vsp/public/shared/authenticated';
import { UserStore } from '@vsp/public/core/stores';
import { ChatMessage, ChatState, fadeAnimation, User, UserSettings } from '@vsp/core';

import { LiveChatStore } from '../../store/live-chat-store.service';

@Component({
  selector: 'vsp-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgFor,
    NgIf,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzTabsModule,
    VspIfAuthenticatedDirective,
    ReactiveFormsModule,
    TitleCasePipe,
  ]
})
export class LiveComponent implements OnDestroy {
  private readonly _route: ActivatedRoute = inject(ActivatedRoute);
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _userStore: UserStore = inject(UserStore);
  private readonly _liveChatStore: LiveChatStore = inject(LiveChatStore);
  
  public liveChatForm: UntypedFormGroup = this._formBuilder.group({ 
    message: [null, [Validators.required]]
  });

  private readonly liveId: string | null = this._route.snapshot.queryParamMap.get('lid');

  public userSettings$: Observable<UserSettings | null> = this._userStore.select(state => state.userSettings);
  public currentLiveChatState$: Observable<ChatState> = this._liveChatStore.currentLiveChatState$;
  public currentChatMessages$: Observable<ChatMessage[]> = this._liveChatStore.currentChatMessages$;
  public currentChatUsers$: Observable<User[]> = this._liveChatStore.currentChatUsers$;
  public currentAnonymousChatUserCount$: Observable<number> = this._liveChatStore.currentAnonymousChatUsersCount$;

  public index: number = 0;

  constructor() {
    if (this.liveId) {
      // this._liveChatStore.startLiveChat(liveId);
    }
  }

  public onSendMessage(): void {
    // this._liveChatStore.sendMessage({
    //   sentOn: new Date(),
    //   sentBy: {} as User,
    //   message: this.liveChatForm.value.message ?? ''
    // });
  }
  
  ngOnDestroy(): void {
    // this._liveChatStore.endLiveChat()
  }
}
