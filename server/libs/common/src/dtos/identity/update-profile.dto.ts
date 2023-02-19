import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, ValidateNested } from 'class-validator';
import { UpdateAddressDto } from './update-address.dto';

export class UpdateProfileDto {
  @IsDefined()
  @IsNotEmpty()
  public firstName: string;

  @IsDefined()
  @IsNotEmpty()
  public lastName: string;

  public summary?: string;
  public avatarUrl?: string;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateAddressDto)
  public address: UpdateAddressDto;

  constructor(obj: Partial<UpdateProfileDto>) {
    Object.assign(this, obj);
  }
}
