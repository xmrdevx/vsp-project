import { Injectable } from '@nestjs/common';
import { EnvironmentService } from '@vsp/core';

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
export class RtmpMediaServerService {
  private readonly mediaServer: any;

  constructor(
    private readonly: EnvironmentService
  ) {
    const NodeMediaServer = require('node-media-server');
    const config: any = this._buildNodeMediaServerConfig();
    this.mediaServer = new NodeMediaServer(config);
  }

  public start(): void {
    this.mediaServer.run();
    this._registerCallbackEvents();
  }

  public stop(): void {
    // @TODO
  }

  private _registerCallbackEvents(): void {
    // Pre Connect Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnPreConnect, 
      (id: any, args: any) => this._onPreConnect(id, args)
    );
    
    // Post Connect Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnPostConnect, 
      (id: any, args: any) => this._onPostConnect(id, args)
    );

    // Done Connect Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnDoneConnect, 
      (id: any, args: any) => this._onDoneConnect(id, args)
    );

    // Pre Publish Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnPrePublish, 
      (id: any, streamPath: any, args: any) => this._onPrePublish(id, streamPath, args)
    );

    // Post Publish Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnPostPublish, 
      (id: any, streamPath: any, args: any) => this._onPostPublish(id, streamPath, args)
    );

    // Done Publish Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnDonePublish, 
      (id: any, streamPath: any, args: any) => this._onDonePublish(id, streamPath, args)
    );

    // Pre Play Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnPrePlay, 
      (id: any, streamPath: any, args: any) => this._onPrePlay(id, streamPath, args)
    );

    // Post Play Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnPostPlay, 
      (id: any, streamPath: any, args: any) => this._onPostPlay(id, streamPath, args)
    );

    // Done Play Event
    this.mediaServer.on(
      NodeMediaServerEvent.OnDonePlay, 
      (id: any, streamPath: any, args: any) => this._onDonePlay(id, streamPath, args)
    );
  }

  private _onPreConnect(id: any, args: any): void {
    // Should validate the stream key
    console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
    // let session = nms.getSession(id);
    // session.reject();
  }

  private _onPostConnect(id: any, args: any): void {
    console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
  }

  private _onDoneConnect(id: any, args: any): void {
    console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
  }

  private _onPrePublish(id: any, streamPath: any, args: any): void {
    console.log('[NodeEvent on prePublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
    // let session = nms.getSession(id);
    // session.reject();
  }

  private _onPostPublish(id: any, streamPath: any, args: any): void {
    console.log('[NodeEvent on postPublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  }

  private _onDonePublish(id: any, streamPath: any, args: any): void {
    console.log('[NodeEvent on donePublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  }

  private _onPrePlay(id: any, streamPath: any, args: any): void {
    console.log('[NodeEvent on prePlay]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
    // let session = nms.getSession(id);
    // session.reject();
  }

  private _onPostPlay(id: any, streamPath: any, args: any): void {
    console.log('[NodeEvent on postPlay]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  }

  private _onDonePlay(id: any, streamPath: any, args: any): void {
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
