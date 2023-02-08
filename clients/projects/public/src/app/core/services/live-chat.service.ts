import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

// import * as signalR from '@microsoft/signalr'

import { ChatEvents, ChatState, ChatMessage, EnvironmentService, User } from '@vsp/core';
import { AuthenticationService } from './authentication.service';
import { WebSocketSettings } from '@vsp/core';

// class CustomHttpClient extends signalR.DefaultHttpClient {
//   public override send(request: signalR.HttpRequest): Promise<signalR.HttpResponse> {
//     request.headers = { ...request.headers, 'X-Live-ID': 'asdfjklasdkfljasdfasdf' };
//     return super.send(request);
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class LiveChatService {
  private _destroy$: Subject<any> = new Subject<any>();
  // private _liveChatConnection!: signalR.HubConnection;

  private _liveId: string | null = null;

  private _liveChatStateSource$: BehaviorSubject<ChatState> = new BehaviorSubject<ChatState>(ChatState.DISCONNECTED);
  public liveChatState$: Observable<ChatState> = this._liveChatStateSource$.asObservable();

  private _chatMessageSource$: Subject<ChatMessage> = new Subject<ChatMessage>();
  public chatMessage$: Observable<ChatMessage> = this._chatMessageSource$.asObservable();

  private _chatUsersSource$: BehaviorSubject<User[]> =  new BehaviorSubject<User[]>([]);
  public chatUsers$: Observable<User[]> = this._chatUsersSource$.asObservable();

  constructor(
    private _environmentService: EnvironmentService,
    private _authenticationService: AuthenticationService
  ) {
    const settings: WebSocketSettings = this._environmentService.getEnvironmentSettings().liveChatWebSocket;
    const liveChatConnectionString: string = `${settings.protocol}://${settings.domain}:${settings.port}/${settings.websocketSlug}/${settings.hubEndpoint}`;
    // this._liveChatConnection = new signalR.HubConnectionBuilder()
    //   .withUrl(liveChatConnectionString, { 
    //     accessTokenFactory: () => {
    //       return `${this._authenticationService.getCachedAuthenticatedUser()?.accessToken}`;
    //     }
    //   })
    //   .build();
  }

  public startLiveChat(liveId: string): void {
    // @TODO in then send message to register user with authenticated user
    // this._liveChatConnection
    //   .start()
    //   .then(() => {
    //     this._liveId = liveId;
    //     this._addReceiveMessageListener();
    //     this._addReceiveUsersListener();
    //     this._joinLiveChat(liveId);
    //     this._liveChatStateSource$.next(ChatState.CONNECTED);
    //   })
    //   .catch(err => console.log('Error while starting connection: ' + err));
  }

  public sendMessage(message: ChatMessage): void {
    // this._liveChatConnection.send(ChatEvents.SEND_MESSAGE, message);
  }

  public endLiveChat(): void {
    // if (this._liveChatConnection) {
    //   this._liveChatConnection.send(ChatEvents.LEAVE, this._liveId)
    //     .then(() => {
    //       this._liveChatConnection.stop();
    //       this._liveChatStateSource$.next(ChatState.DISCONNECTED);
    //     });
    // }
  }
  
  private _addReceiveMessageListener() {
    // if (this._liveChatConnection) {
    //   this._liveChatConnection.on(
    //     ChatEvents.BROADCAST_MESSAGE, 
    //     (message) => this._liveChatStateSource$.next(message)
    //   );
    // }
  }

  private _addReceiveUsersListener() {
    // if (this._liveChatConnection) {
    //   this._liveChatConnection.on(
    //     ChatEvents.BROADCAST_USERS,
    //     (payload: { users: User[] }) => this._chatUsersSource$.next(payload.users)
    //   );
    // }
  }

  private _joinLiveChat(liveId: string): void {
    // if (this._authenticationService) {
    //   this._liveChatConnection.send(ChatEvents.JOIN, liveId);
    // }
  }
}
