import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account, Address, OffenderCase, Claim, DeviceCode, GeoLocation, Offender, Profile, RefreshToken, Role, Tenant, User } from '@vsp/common';
import { CoreModule, TypeOrmConfigService } from '@vsp/core';
import { LoggerModule } from '@vsp/logger';

import { OffendersController } from './controllers/offenders.controller';

import { OFFENDER_CASES_SERVICE_TOKEN } from './interfaces/offender-cases-service.interface';
import { OffenderCasesService } from './services/offender-cases.service';

import { OFFENDER_CASES_REPOSITORY_TOKEN } from './interfaces/offender-cases-repository.interface';
import { OffenderCasesRepository } from './repositories/offender-cases.repository';

import { OFFENDERS_REPOSITORY_TOKEN } from './interfaces/offenders-repository.interface';
import { OffendersRepository } from './repositories/offenders.repository';

import { OFFENDERS_SERVICE_TOKEN } from './interfaces/offenders-service.interface';
import { OffendersService } from './services/offenders.service';
import { OffenderCasesController } from './controllers/offender-cases.controller';

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
    OffenderCasesController
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
    }
  ],
})
export class OffendersModule {}
