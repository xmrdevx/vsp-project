import { NestFactory } from '@nestjs/core';

import { loadEnvironmentVariables } from '@vsp/env';

import { RtmpMediaServerModule } from './rtmp-media-server.module';
import { RtmpMediaServerService } from './rtmp-media-server.service';

const NodeMediaServer = require('node-media-server');


// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(RtmpMediaServerModule);
  const rtmpMediaServerService: RtmpMediaServerService = app.get(RtmpMediaServerService);
  
  try {
    rtmpMediaServerService.start();
  } catch (error) {
    rtmpMediaServerService.stop();
    app.close();
  }
}
bootstrap();
