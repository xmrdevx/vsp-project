export class DeleteResourceRequest<T> {
  public resourceId: string;
  public resource: T

  constructor(obj: Partial<DeleteResourceRequest<T>>) {
    Object.assign(this, obj);
  }
}
