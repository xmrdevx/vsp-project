export class UpdateResourceRequest<T> {
  public resourceId: string;
  public resource: T;

  constructor(obj: Partial<UpdateResourceRequest<T>>) {
    Object.assign(this, obj);
  }
}
