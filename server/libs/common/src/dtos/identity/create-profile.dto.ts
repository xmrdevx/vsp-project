import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserAddressDto } from './create-user-address.dto';

export class CreateProfileDto {
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
  @Type(() => CreateUserAddressDto)
  public address: CreateUserAddressDto;

  constructor(obj: Partial<CreateProfileDto>) {
    Object.assign(this, obj);
  }
}
