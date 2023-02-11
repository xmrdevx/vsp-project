export class DeleteResourceRequest {
  public resourceId: string;

  constructor(obj: Partial<DeleteResourceRequest>) {
    Object.assign(this, obj);
  }
}
