import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOffenderDto {
  @IsDefined()
  @IsNotEmpty()
  public firstName: string;

  @IsDefined()
  @IsNotEmpty()
  public lastName: string;
  
  @IsOptional()
  public avatarUrl: string;
  
  @IsDefined()
  @IsNotEmpty()
  public summary: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public createdById: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public updatedById: string;

  constructor(obj: Partial<CreateOffenderDto>) {
    Object.assign(this, obj);
  }
}