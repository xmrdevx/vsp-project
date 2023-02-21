import { IsDefined, IsNotEmpty } from 'class-validator';

export class GetUserRequest {
  @IsDefined()
  @IsNotEmpty()
  public tenantId: string;

  constructor(obj: Partial<GetUserRequest>) {
    Object.assign(this, obj);
  }
};
