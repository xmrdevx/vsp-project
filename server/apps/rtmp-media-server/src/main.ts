import { NestFactory } from '@nestjs/core';

import { loadEnvironmentVariables } from '@vsp/env';
import { IRtmpMediaServerService } from './interfaces/rtmp-media-server-service.interface';

import { RtmpMediaServerModule } from './rtmp-media-server.module';
import { RtmpMediaServerService } from './services/rtmp-media-server.service';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(RtmpMediaServerModule);
  const rtmpMediaServerService: IRtmpMediaServerService = app.get(RtmpMediaServerService);
  
  try {
    rtmpMediaServerService.start();
  } catch (error) {
    rtmpMediaServerService.stop();
    app.close();
  }
}
bootstrap();
