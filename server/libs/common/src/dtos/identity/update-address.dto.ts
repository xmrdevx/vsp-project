export class UpdateAddressDto {
  public street?: string | null;
  public street2?: string | null;
  public city?: string | null;
  public state?: string | null;
  public zip?: string | null;
  public country?: string | null;

  constructor(obj: Partial<UpdateAddressDto>) {
    Object.assign(this, obj);
  }
}
