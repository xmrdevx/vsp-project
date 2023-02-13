import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';

import { CaseStatus } from '../../enums/case-status.enum';
import { Visibility } from '../../enums/visibility.enum';
import { GeoLocationDto } from '../geocoding/geo-location.dto';
import { CreateGeoLocationDto } from './create-geo-location.dto';

export class UpdateCaseDto {
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
  public updatedById: string;

  @ApiProperty({ readOnly: true })
  public offenderId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateGeoLocationDto)
  public caughtAt: CreateGeoLocationDto;
}
