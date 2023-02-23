import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { ClaimDto } from './claim.dto';

export class CreatePermissionTemplateDto {
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

  @IsDefined()
  @IsNotEmpty()
  public createdById: string;

  @IsOptional()
  public claims: ClaimDto[] | null | undefined;

  constructor(obj: Partial<CreatePermissionTemplateDto>) {
    Object.assign(this, obj);
  }
}
