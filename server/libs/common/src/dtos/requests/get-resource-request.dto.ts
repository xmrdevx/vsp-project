export class GetResourceRequest<T> {
  public resourceId: string;
  public resource: T;

  constructor(obj: Partial<GetResourceRequest<T>>) {
    Object.assign(this, obj);
  }
}
