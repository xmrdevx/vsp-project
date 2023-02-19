export class UpdateAddressDto {
  public street?: string;
  public street2?: string;
  public city?: string;
  public state?: string;
  public zip?: string;
  public country?: string;

  constructor(obj: Partial<UpdateAddressDto>) {
    Object.assign(this, obj);
  }
}
