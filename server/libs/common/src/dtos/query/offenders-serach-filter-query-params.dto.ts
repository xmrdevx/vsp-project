import { defaultSortColumn, defaultSortDirection } from '../../constants';
import { DistanceUnit } from '@vsp/common/enums';
import { toFloatNumber, toIntNumber } from '@vsp/common/utils/cast.utils'
import { Transform } from 'class-transformer'
import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator'

export class OffenderSearchFilterQueryParams {
  @IsDefined()
  @IsString()
  public query: string = '';

  @Transform(({ value }) => toFloatNumber(value, { default: 0 }))
  @IsDefined()
  @IsNumber()
  @IsOptional()
  public locationLatitude: number;

  @Transform(({ value }) => toFloatNumber(value, { default: 0 }))
  @IsDefined()
  @IsNumber()
  @IsOptional()
  public locationLongitude: number;

  @Transform(({ value }) => toFloatNumber(value, { default: 0 }))
  @IsDefined()
  @IsNumber()
  @IsOptional()
  public distance: number;

  @IsDefined()
  @IsEnum(DistanceUnit)
  @IsString()
  @IsOptional()
  public distanceUnit: DistanceUnit;

  @Transform(({ value }) => toIntNumber(value, { default: 0 }))
  @IsDefined()
  @IsNumber()
  @IsInt()
  public index: number = 0;
  
  @Transform(({ value }) => toIntNumber(value, { default: 10 }))
  @IsDefined()
  @IsNumber()
  @IsInt()
  public size: number = 10;

  @IsDefined()
  @IsString()
  public column: string = defaultSortColumn;

  @IsDefined()
  @IsString()
  public direction: string = defaultSortDirection;
}
