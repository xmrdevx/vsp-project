import { defaultSortColumn, defaultSortDirection } from '../../constants';
import { toFloatNumber, toIntNumber } from '@vsp/common/utils/cast.utils'
import { Transform } from 'class-transformer'

import { IsDefined, IsInt, IsNumber, IsOptional, IsString } from 'class-validator'

export class OffenderSearchFilterByBoundsQueryParams {
  @Transform(({ value }) => toFloatNumber(value, { default: 0 }))
  @IsDefined()
  @IsNumber()
  @IsOptional()
  public northEastLatitude: number;

  @Transform(({ value }) => toFloatNumber(value, { default: 0 }))
  @IsDefined()
  @IsNumber()
  @IsOptional()
  public northEastLongitude: number;

  @Transform(({ value }) => toFloatNumber(value, { default: 0 }))
  @IsDefined()
  @IsNumber()
  @IsOptional()
  public southWestLatitude: number;

  @Transform(({ value }) => toFloatNumber(value, { default: 0 }))
  @IsDefined()
  @IsNumber()
  @IsOptional()
  public southWestLongitude: number;

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
