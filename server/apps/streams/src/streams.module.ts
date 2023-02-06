import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreModule, TypeOrmConfigService } from '@vsp/core';
import { LoggerModule } from '@vsp/logger';
import { Account, Address, Claim, DeviceCode, Profile, RefreshToken, Role, Stream, StreamKey, Tenant, User } from '@vsp/common';

import { StreamsController } from './controllers/streams.controller';

import { STREAMS_SERVICE_TOKEN } from './interfaces/streams-service.interface';
import { StreamsService } from './services/streams.service';

import { STREAM_KEYS_REPOSITORY_TOKEN } from './interfaces/stream-keys-repository.interface';
import { StreamKeysRepository } from './repositories/stream-keys.repository';

import { STREAMS_REPOSITORY_TOKEN } from './interfaces/streams-repository.interface';
import { StreamsRepository } from './repositories/streams.repository';

@Module({
  imports: [
    CoreModule.forRoot(),
    LoggerModule,
    TypeOrmModule.forRootAsync({
      imports: [CoreModule.forRoot()],
      useClass: TypeOrmConfigService
    }),
    TypeOrmModule.forFeature([
      Account, 
      Address, 
      Claim, 
      DeviceCode, 
      Profile, 
      RefreshToken, 
      Role, 
      Stream, 
      StreamKey, 
      Tenant, 
      User
    ])
  ],
  controllers: [StreamsController],
  providers: [
    {
      provide: STREAMS_SERVICE_TOKEN,
      useClass: StreamsService
    },
    {
      provide: STREAM_KEYS_REPOSITORY_TOKEN,
      useClass: StreamKeysRepository
    },
    {
      provide: STREAMS_REPOSITORY_TOKEN,
      useClass: StreamsRepository
    }
  ],
})
export class StreamsModule {}
