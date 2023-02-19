import { IsDefined, IsNotEmpty } from 'class-validator';

export class LockoutUserRequest {
  @IsDefined()
  @IsNotEmpty()
  public tenantId: string;

  @IsDefined()
  @IsNotEmpty()
  public isLockedOut: boolean = true;

  constructor(obj: Partial<LockoutUserRequest>) {
    Object.assign(this, obj);
  }
};
