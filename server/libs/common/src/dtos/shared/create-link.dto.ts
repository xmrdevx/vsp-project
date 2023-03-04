import { IsDefined, IsNotEmpty } from 'class-validator';
import { IsNull } from 'typeorm';
import { LinkType } from '../../enums/link-type.enum';
import { Visibility } from '../../enums/visibility.enum';

export class CreateLinkDto {
  @IsDefined()
  @IsNotEmpty()
  public type: LinkType;

  @IsDefined()
  @IsNotEmpty()
  public name: string;

  @IsDefined()
  @IsNotEmpty()
  public url: string;

  @IsDefined()
  @IsNotEmpty()
  public visibility: Visibility;

  constructor(obj: Partial<CreateLinkDto>) {
    Object.assign(this, obj);
  }
}
