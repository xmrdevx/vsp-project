import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { EnvironmentService } from '@vsp/core';
import { loadEnvironmentVariables } from '@vsp/env';
import { GeocodingModule } from './geocoding.module';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const environmentService: EnvironmentService =  new EnvironmentService();
  const app = await NestFactory.createMicroservice(
    GeocodingModule, {
      transport: Transport.TCP,
      options: {
        host: environmentService.get('GEOCODING_SERVICE_HOST'),
        port: environmentService.get('GEOCODING_SERVICE_PORT')
      }
    } as TcpOptions
  );
  await app.listen();
}
bootstrap();
