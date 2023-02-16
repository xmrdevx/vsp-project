import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';

export class Credentials {
  @IsDefined()
  @IsNotEmpty()
  public username: string;

  @IsDefined()
  @IsNotEmpty()
  public password: string;

  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  public clientId: string;

  constructor(obj: Partial<Credentials>) {
    Object.assign(this, obj);
  }
}
