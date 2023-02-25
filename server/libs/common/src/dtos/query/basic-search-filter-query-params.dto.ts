import { IsDefined, IsInt, IsNumber, IsOptional, IsString } from 'class-validator'
import { Transform } from 'class-transformer';
import { toIntNumber, toOptionalBoolean } from '../../utils/cast.utils';
import { defaultSortColumn, defaultSortDirection } from '../../constants/query-params.defaults';

export class BasicSearchFilterQueryParams {
  @IsDefined()
  @IsString()
  public query: string = '';
  
  @Transform(({ value }) => toOptionalBoolean(value))
  @IsDefined()
  @IsOptional()
  public isDeleted: boolean | null | undefined = undefined;

  @Transform(({ value }) => toIntNumber(value))
  @IsDefined()
  @IsNumber()
  @IsInt()
  public index: number = 0;
  
  @Transform(({ value }) => toIntNumber(value))
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
