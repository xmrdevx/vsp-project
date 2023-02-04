import { Module } from '@nestjs/common';
import { CoreModule } from '@vsp/core';
import { RtmpMediaServerService } from './rtmp-media-server.service';

@Module({
  imports: [CoreModule.forRoot()],
  controllers: [],
  providers: [RtmpMediaServerService],
})
export class RtmpMediaServerModule {}
