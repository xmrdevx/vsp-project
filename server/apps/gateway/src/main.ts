import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';

import { loadEnvironmentVariables } from '@vsp/env';
import { EnvironmentService } from '@vsp/core';

import { GatewayModule } from './gateway.module';
import { RpcExceptionFilter } from './filters/rpc-exception.filter';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

const routesToExcludeFromGlobalRoutePrefix: string[] = [
  'auth/sign-in', 
  'auth/forgot-password', 
  'auth/reset-password', 
  'auth/refresh-token',
  'accounts/register',
  'accounts/reset-password',
  'accounts/confirm-email',
  'accounts/forgot-password',
  'accounts/emails',
  'accounts/usernames',
];

const globalValidationPipeOptions: ValidationPipeOptions = {
  transform: true,
  skipMissingProperties: false,
  skipNullProperties: false,
  skipUndefinedProperties: false,
} as ValidationPipeOptions;

async function bootstrap() {
  const environmentService: EnvironmentService = new EnvironmentService();
  const app = await NestFactory.create(GatewayModule);

  app.useGlobalPipes(new ValidationPipe(globalValidationPipeOptions));
  app.enableCors({ origin: environmentService.get('CORS_ORIGIN') });
  app.useGlobalFilters(new RpcExceptionFilter());
  app.setGlobalPrefix('api/v1', { exclude: routesToExcludeFromGlobalRoutePrefix });
  
  const options = new DocumentBuilder()
    .setTitle('API Docs')
    .addTag('auth')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(environmentService.get('API_GATEWAY_PORT'));
}

bootstrap();
