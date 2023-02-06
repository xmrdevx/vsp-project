import { Module } from '@nestjs/common';
import { CoreModule, EnvironmentService } from '@vsp/core';

import { RTMP_MEDIA_SERVER_SERVICE_TOKEN } from './interfaces/rtmp-media-server-service.interface';
import { RtmpMediaServerService } from './services/rtmp-media-server.service';

import { STREAMS_SERVICE_TOKEN } from '@vsp/common';
import { ClientProxyFactory, TcpClientOptions, Transport } from '@nestjs/microservices';


@Module({
  imports: [CoreModule.forRoot()],
  controllers: [],
  providers: [
    RtmpMediaServerService,
    {
      provide: STREAMS_SERVICE_TOKEN,
      useFactory: (environmentService: EnvironmentService) => {
        return ClientProxyFactory.create({
          options: {
            port: environmentService.get('STREAMS_SERVICE_PORT'),
            host: environmentService.get('STREAMS_SERVICE_HOST'),
          },
          transport: Transport.TCP,
        } as TcpClientOptions);
      },
      inject: [EnvironmentService]
    }
  ],
})
export class RtmpMediaServerModule {}
