import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { ClaimDto } from './claim.dto';

export class UpdatePermissionTemplateDto {
  @IsDefined()
  @IsNotEmpty()
  public id: string;

  @IsDefined()
  @IsNotEmpty()
  public name: string;

  @IsOptional()
  public description: string | null | undefined;
  
  @IsDefined()
  @IsNotEmpty()
  public tenantId: string;

  @IsDefined()
  @IsNotEmpty()
  public updatedById: string;

  @IsOptional()
  public claims: ClaimDto[] | null | undefined;

  constructor(obj: Partial<UpdatePermissionTemplateDto>) {
    Object.assign(this, obj);
  }
}
