import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsDefined, IsEmail, IsNotEmpty, IsOptional, ValidateNested,  } from 'class-validator';
import { ClaimDto } from './claim.dto';
import { CreateProfileDto } from './create-profile.dto';

export class CreateUserDto {
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  public username: string;

  @IsDefined()
  @IsNotEmpty()
  public password: string;

  @IsDefined()
  @IsNotEmpty()
  public confirmPassword: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  public email: string;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateProfileDto)
  public profile: CreateProfileDto;

  @IsOptional()
  public claims: ClaimDto[]

  @IsOptional()
  public tenantId: string;

  constructor(obj: Partial<CreateUserDto>) {
    Object.assign(this, obj);
  }
}
