import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';

import { CaseStatus } from '../../enums/case-status.enum';
import { Visibility } from '../../enums/visibility.enum';
import { GeoLocationDto } from '../geocoding/geo-location.dto';
import { CreateAddressDto } from '../shared';
import { CreateGeoLocationDto } from './create-geo-location.dto';
import { CreateOffenderDto } from './create-offender.dto';

export class CreateOffenderForCaseDto {
  @IsDefined()
  @IsNotEmpty()
  public firstName: string;

  @IsDefined()
  @IsNotEmpty()
  public lastName: string;
  
  @IsDefined()
  @IsNotEmpty()
  public avatarUrl: string;
  
  @IsDefined()
  @IsNotEmpty()
  public summary: string;

  constructor(obj: Partial<CreateOffenderForCaseDto>) {
    Object.assign(this, obj);
  }
}

export class CreateOffenderCaseWithOffenderDto {
  @IsDefined()
  @IsNotEmpty()
  public openedOn: Date = new Date();

  @IsDefined()
  @IsNotEmpty()
  public status: CaseStatus = CaseStatus.OPEN;

  @IsDefined()
  @IsNotEmpty()
  public visibility: Visibility = Visibility.PRIVATE;

  @IsDefined()
  @IsNotEmpty()
  public summary: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public createdById: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public updatedById: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public tenantId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  public caughtAt: CreateAddressDto;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateOffenderForCaseDto)
  public offender: CreateOffenderForCaseDto;

  constructor(obj: Partial<CreateOffenderDto>) {
    Object.assign(this, obj);
  }
}
