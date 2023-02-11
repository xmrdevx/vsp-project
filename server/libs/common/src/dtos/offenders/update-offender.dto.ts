import { IsDefined, IsNotEmpty } from 'class-validator';
import { CreateOffenderDto } from './create-offender.dto';

export class UpdateOffenderDto {
  @IsDefined()
  @IsNotEmpty()
  public firstName: string;

  @IsDefined()
  @IsNotEmpty()
  public lastName: string;
  
  @IsDefined()
  @IsNotEmpty()
  public avatarUrl: string;

  @IsDefined()
  @IsNotEmpty()
  public summary: string;

  constructor(obj: Partial<CreateOffenderDto>) {
    Object.assign(this, obj);
  }
}