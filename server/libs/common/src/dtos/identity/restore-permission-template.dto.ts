import { IsDefined, IsNotEmpty } from 'class-validator';
import { ClaimDto } from './claim.dto';

export class RestorePermissionTemplateDto {
  @IsDefined()
  @IsNotEmpty()
  public tenantId: string;

  @IsDefined()
  @IsNotEmpty()
  public updatedById: string;

  constructor(obj: Partial<RestorePermissionTemplateDto>) {
    Object.assign(this, obj);
  }
}
