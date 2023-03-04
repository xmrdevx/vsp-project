export class CreateResourceRequest<T> {
  public resourceId?: string;
  public resource: T;

  constructor(obj: Partial<CreateResourceRequest<T>>) {
    Object.assign(this, obj);
  }
}
