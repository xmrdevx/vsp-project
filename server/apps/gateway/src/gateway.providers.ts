import { ClientProxyFactory, TcpClientOptions, Transport } from '@nestjs/microservices';

import { GEOCODING_SERVICE_TOKEN, IDENTITY_SERVICE_TOKEN, OFFENDERS_SERVICE_TOKEN, STREAMS_SERVICE_TOKEN } from '@vsp/common';
import { EnvironmentService } from '@vsp/core';

export const identityMicroserviceProvider = {
  provide: IDENTITY_SERVICE_TOKEN,
  useFactory: (environmentService: EnvironmentService) => {
    return ClientProxyFactory.create({
      options: {
        port: environmentService.get('IDENTITY_SERVICE_PORT'),
        host: environmentService.get('IDENTITY_SERVICE_HOST'),
      },
      transport: Transport.TCP,
    } as TcpClientOptions);
  },
  inject: [EnvironmentService]
};

export const streamsMicroserviceProvider = {
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
};

export const geocodingMicroserviceProvider = {
  provide: GEOCODING_SERVICE_TOKEN,
  useFactory: (environmentService: EnvironmentService) => {
    return ClientProxyFactory.create({
      options: {
        port: environmentService.get('GEOCODING_SERVICE_PORT'),
        host: environmentService.get('GEOCODING_SERVICE_HOST'),
      },
      transport: Transport.TCP,
    } as TcpClientOptions);
  },
  inject: [EnvironmentService]
};

export const offendersMicroserviceProvider = {
  provide: OFFENDERS_SERVICE_TOKEN,
  useFactory: (environmentService: EnvironmentService) => {
    return ClientProxyFactory.create({
      options: {
        port: environmentService.get('OFFENDERS_SERVICE_PORT'),
        host: environmentService.get('OFFENDERS_SERVICE_HOST'),
      },
      transport: Transport.TCP,
    } as TcpClientOptions);
  },
  inject: [EnvironmentService]
};
