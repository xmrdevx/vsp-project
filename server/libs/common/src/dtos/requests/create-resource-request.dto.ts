export class CreateResourceRequest<T> {
  public resource: T;

  constructor(obj: Partial<CreateResourceRequest<T>>) {
    Object.assign(this, obj);
  }
}
