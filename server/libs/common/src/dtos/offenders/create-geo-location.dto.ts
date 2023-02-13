import { IsDecimal, IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGeoLocationDto {
  @IsDefined()
  @IsNotEmpty()
  @IsDecimal()
  public latitude: number;

  @IsDefined()
  @IsNotEmpty()
  @IsDecimal()
  public longitude: number;

  @IsOptional()
  public fullAddressString: string
}
