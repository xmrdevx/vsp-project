import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { ClaimDto } from './claim.dto';

export class DeletePermissionTemplateDto {
  @IsDefined()
  @IsNotEmpty()
  public tenantId: string;

  @IsDefined()
  @IsNotEmpty()
  public deletedById: string;

  constructor(obj: Partial<DeletePermissionTemplateDto>) {
    Object.assign(this, obj);
  }
}
