export class CreateUserAddressDto {
  public street?: string;
  public street2?: string;
  public city?: string;
  public state?: string;
  public zip?: string;
  public country?: string;

  constructor(obj: Partial<CreateUserAddressDto>) {
    Object.assign(this, obj);
  }
}