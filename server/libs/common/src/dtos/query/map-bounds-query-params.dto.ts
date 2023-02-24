import { Transform } from 'class-transformer';
import { IsDefined, IsNumber, IsOptional } from 'class-validator';
import { toFloatNumber } from '../../utils';

export class MapBoundQueryParams {
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
}
