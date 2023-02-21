import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsDefined, IsEmail, IsNotEmpty, IsOptional, ValidateNested,  } from 'class-validator';
import { ClaimDto } from './claim.dto';
import { UpdateProfileDto } from './update-profile.dto';

export class UpdateUserDto {
  // @IsDefined()
  // @IsNotEmpty()
  // @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  // public username: string;

  // @IsDefined()
  // @IsNotEmpty()
  // public password: string;

  // @IsDefined()
  // @IsNotEmpty()
  // public confirmPassword: string;

  // @IsDefined()
  // @IsNotEmpty()
  // @IsEmail()
  // @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  // public email: string;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateProfileDto)
  public profile: UpdateProfileDto;

  @IsOptional()
  public claims: ClaimDto[]

  @IsOptional()
  public tenantId: string;

  constructor(obj: Partial<UpdateUserDto>) {
    Object.assign(this, obj);
  }
}
