import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account, Address, Case, Claim, DeviceCode, GeoLocation, Offender, Profile, RefreshToken, Role, Tenant, User } from '@vsp/common';
import { CoreModule, TypeOrmConfigService } from '@vsp/core';
import { LoggerModule } from '@vsp/logger';

import { OffendersController } from './controllers/offenders.controller';

import { CASES_SERVICE_TOKEN } from './interfaces/cases-service.interface';
import { CasesService } from './services/cases.service';

import { CASES_REPOSITORY_TOKEN } from './interfaces/cases-repository.interface';
import { CasesRepository } from './repositories/cases.repository';

import { OFFENDERS_REPOSITORY_TOKEN } from './interfaces/offenders-repository.interface';
import { OffendersRepository } from './repositories/offenders.repository';

import { OFFENDERS_SERVICE_TOKEN } from './interfaces/offenders-service.interface';
import { OffendersService } from './services/offenders.service';

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
      Case,
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
    OffendersController
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
      provide: CASES_REPOSITORY_TOKEN,
      useClass: CasesRepository
    },
    {
      provide: CASES_SERVICE_TOKEN,
      useClass: CasesService
    }
  ],
})
export class OffendersModule {}
