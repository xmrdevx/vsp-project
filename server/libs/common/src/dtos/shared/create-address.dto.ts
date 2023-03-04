export class CreateAddressDto {
  public street?: string;
  public street2?: string;
  public city?: string;
  public state?: string;
  public zip?: string;
  public country?: string;
  public latitude?: number;
  public longitude?: number;

  constructor(obj: Partial<CreateAddressDto>) {
    Object.assign(this, obj);
  }
}