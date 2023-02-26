export class BasicQuerySearchFilter {
  public query: string;
  public isDeleted?: boolean | null | undefined

  constructor(obj: Partial<BasicQuerySearchFilter>) {
    Object.assign(this, { query: obj?.query || '', isDeleted: obj?.isDeleted || undefined });
  }
}
