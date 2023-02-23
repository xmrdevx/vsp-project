import { IsDefined, IsNotEmpty } from 'class-validator';

export class GetPermissionTemplatesDto {
  @IsDefined()
  @IsNotEmpty()
  public tenantId: string;

  constructor(obj: Partial<GetPermissionTemplatesDto>) {
    Object.assign(this, obj);
  }
}
