import { BaseDto } from '../base.dto';
import { ClaimDto } from './claim.dto';

export class PermissionTemplateDto extends BaseDto {
  public name: string;
  public description: string | null | undefined;
  public claims: ClaimDto[] | null | undefined;

  constructor(obj: Partial<PermissionTemplateDto>) {
    super();
    Object.assign(this, obj);
  }
}
