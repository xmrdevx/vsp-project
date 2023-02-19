export class UpdateAddressDto {
  public street?: string | undefined;
  public street2?: string | undefined;
  public city?: string | undefined;
  public state?: string | undefined;
  public zip?: string | undefined;
  public country?: string | undefined;

  constructor(obj: Partial<UpdateAddressDto>) {
    Object.assign(this, obj);
  }
}
