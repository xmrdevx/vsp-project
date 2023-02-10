export class GetOffenderByIdRequest {
  public offenderId: string;

  constructor(obj: any) {
    Object.assign(this, { offenderId: obj.offenderId || '' });
  }
}
