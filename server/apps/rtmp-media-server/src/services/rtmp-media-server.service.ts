import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ResponseMessage, ResponseStatus, StreamPreConnectValidationRequestDto, STREAMS_SERVICE_TOKEN, validateStreamPreConnectCommand } from '@vsp/common';
import { EnvironmentService } from '@vsp/core';
import { firstValueFrom } from 'rxjs';
import { valid } from 'semver';
import { IRtmpMediaServerService } from '../interfaces/rtmp-media-server-service.interface';

class NodeMediaServerEvent {
  public static readonly OnPreConnect: string = 'preConnect';
  public static readonly OnPostConnect: string = 'postConnect';
  public static readonly OnDoneConnect: string = 'doneConnect';
  public static readonly OnPrePublish: string = 'prePublish';
  public static readonly OnPostPublish: string = 'postPublish';
  public static readonly OnDonePublish: string = 'donePublish';
  public static readonly OnPrePlay: string = 'prePlay';
  public static readonly OnPostPlay: string = 'postPlay';
  public static readonly OnDonePlay: string = 'donePlay';
}

@Injectable()
export class RtmpMediaServerService implements IRtmpMediaServerService {  
  @Inject(STREAMS_SERVICE_TOKEN)
  private readonly _streamsServiceClient: ClientProxy;

  private readonly _mediaServer: any;

  constructor(private readonly _environmentsService: EnvironmentService) {
    const NodeMediaServer = require('node-media-server');
    const config: any = this._buildNodeMediaServerConfig();
    this._mediaServer = new NodeMediaServer(config);
  }

  public async start(): Promise<void> {
    this._mediaServer.run();
    this._registerCallbackEvents();
  }

  public stop(): void {
    // @TODO
  }

  private _registerCallbackEvents(): void {
    // Pre Connect Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnPreConnect, 
      async (id: any, args: any) => this._onPreConnect(id, args)
    );
    
    // Post Connect Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnPostConnect, 
      async (id: any, args: any) => this._onPostConnect(id, args)
    );

    // Done Connect Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnDoneConnect, 
      async (id: any, args: any) => this._onDoneConnect(id, args)
    );

    // Pre Publish Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnPrePublish, 
      async (id: any, streamPath: any, args: any) => this._onPrePublish(id, streamPath, args)
    );

    // Post Publish Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnPostPublish, 
      async (id: any, streamPath: any, args: any) => this._onPostPublish(id, streamPath, args)
    );

    // Done Publish Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnDonePublish, 
      async (id: any, streamPath: any, args: any) => this._onDonePublish(id, streamPath, args)
    );

    // Pre Play Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnPrePlay, 
      async (id: any, streamPath: any, args: any) => this._onPrePlay(id, streamPath, args)
    );

    // Post Play Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnPostPlay, 
      async (id: any, streamPath: any, args: any) => this._onPostPlay(id, streamPath, args)
    );

    // Done Play Event
    this._mediaServer.on(
      NodeMediaServerEvent.OnDonePlay, 
      async (id: any, streamPath: any, args: any) => this._onDonePlay(id, streamPath, args)
    );
  }

  private async _onPreConnect(id: any, args: any): Promise<void> {
    let session = this._mediaServer.getSession(id);
    
    var validationResult: ResponseMessage<void> = await firstValueFrom(
      this._streamsServiceClient.send(
        validateStreamPreConnectCommand, 
        new StreamPreConnectValidationRequestDto({
          // @TODO temp replace with actual streamid and key once figure out.
          streamId: '1a7402f9-c738-4e73-8e29-87065ddc2810',
          streamKey: '90e7603b-dc26-4199-bffb-e44863a96489'
        }))
    );
    
    // If stream and stream key are valid allow else reject.
    if (validationResult?.status === ResponseStatus.SUCCESS) {
      console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
    } else {
      console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)} REJECT!`);
      session.reject();
    }
  }

  private async _onPostConnect(id: any, args: any): Promise<void> {
    console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
  }

  private async _onDoneConnect(id: any, args: any): Promise<void> {
    console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
  }

  private async _onPrePublish(id: any, streamPath: any, args: any): Promise<void> {
    console.log('[NodeEvent on prePublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
    // let session = nms.getSession(id);
    // session.reject();
  }

  private async _onPostPublish(id: any, streamPath: any, args: any): Promise<void> {
    console.log('[NodeEvent on postPublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  }

  private async _onDonePublish(id: any, streamPath: any, args: any): Promise<void> {
    console.log('[NodeEvent on donePublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  }

  private async _onPrePlay(id: any, streamPath: any, args: any): Promise<void> {
    console.log('[NodeEvent on prePlay]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
    // let session = nms.getSession(id);
    // session.reject();
  }

  private async _onPostPlay(id: any, streamPath: any, args: any): Promise<void> {
    console.log('[NodeEvent on postPlay]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  }

  private async _onDonePlay(id: any, streamPath: any, args: any): Promise<void> {
    console.log('[NodeEvent on donePlay]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  }

  private _buildNodeMediaServerConfig(): any {
    // @TODO should be build form environment service
    return {
      rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
      },
      http: {
        port: 8000,
        allow_origin: '*'
      }
    };
  }
}
