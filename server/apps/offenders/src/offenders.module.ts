import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { 
  Account, 
  Address, 
  OffenderCase, 
  Claim, 
  DeviceCode, 
  GeoLocation, 
  Offender, 
  Profile, 
  RefreshToken, 
  Role, 
  Tenant, 
  User, 
  OffenderComment, 
  OffenderCommentLike } from '@vsp/common';

import { CoreModule, TypeOrmConfigService } from '@vsp/core';
import { LoggerModule } from '@vsp/logger';

import { OffendersController } from './controllers/offenders.controller';
import { OffenderCasesController } from './controllers/offender-cases.controller';
import { OffenderCommentsController } from './controllers/offender-comments.controller';

import { OFFENDER_CASES_SERVICE_TOKEN } from './interfaces/offender-cases-service.interface';
import { OffenderCasesService } from './services/offender-cases.service';

import { OFFENDER_CASES_REPOSITORY_TOKEN } from './interfaces/offender-cases-repository.interface';
import { OffenderCasesRepository } from './repositories/offender-cases.repository';

import { OFFENDERS_REPOSITORY_TOKEN } from './interfaces/offenders-repository.interface';
import { OffendersRepository } from './repositories/offenders.repository';

import { OFFENDERS_SERVICE_TOKEN } from './interfaces/offenders-service.interface';
import { OffendersService } from './services/offenders.service';

import { OFFENDER_COMMENTS_SERVICE_TOKEN } from './interfaces/offender-comments-service.interface';
import { OffenderCommentsService } from './services/offender-comments.service';

import { OFFENDER_COMMENTS_REPOSITORY_TOKEN } from './interfaces/offender-comments-repository.interface';
import { OffenderCommentsRepository } from './repositories/offender-comments.repository';

import { OFFENDER_COMMENT_LIKES_REPOSITORY_TOKEN } from './interfaces/offender-comment-likes-repository.interface';
import { OffenderCommentLikesRepository } from './repositories/offender-comment-likes.repository';

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
      OffenderComment,
      OffenderCommentLike,
      OffenderCase,
      Claim,
      DeviceCode,
      GeoLocation,
      Offender,
      Profile,
      RefreshToken,
      Role,
      Tenant,
      User,
    ])
  ],
  controllers: [
    OffendersController,
    OffenderCasesController,
    OffenderCommentsController
  ],
  providers: [
    {
      provide: OFFENDERS_REPOSITORY_TOKEN,
      useClass: OffendersRepository
    },
    {
      provide: OFFENDERS_SERVICE_TOKEN,
      useClass: OffendersService
    },
    {
      provide: OFFENDER_CASES_REPOSITORY_TOKEN,
      useClass: OffenderCasesRepository
    },
    {
      provide: OFFENDER_CASES_SERVICE_TOKEN,
      useClass: OffenderCasesService
    },
    {
      provide: OFFENDER_COMMENTS_SERVICE_TOKEN,
      useClass: OffenderCommentsService
    },
    {
      provide: OFFENDER_COMMENTS_REPOSITORY_TOKEN,
      useClass: OffenderCommentsRepository
    },
    {
      provide: OFFENDER_COMMENT_LIKES_REPOSITORY_TOKEN,
      useClass: OffenderCommentLikesRepository
    }
  ],
})
export class OffendersModule {}
