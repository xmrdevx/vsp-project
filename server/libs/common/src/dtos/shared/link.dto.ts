import { LinkType } from '../../enums/link-type.enum';
import { Visibility } from '../../enums/visibility.enum';
import { BaseDto } from '../base.dto';

export class LinkDto extends BaseDto {
  public type: LinkType;
  public name: string;
  public url: string;
  public visibility: Visibility;
  
  constructor(obj: Partial<LinkDto>) {
    super();
    Object.assign(this, obj);
  }
}
