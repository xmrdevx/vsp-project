export class GetOffenderByIdRequest {
  public offenderId: string;

  constructor(obj: Partial<GetOffenderByIdRequest>) {
    Object.assign(this, { offenderId: obj.offenderId || '' });
  }
}
