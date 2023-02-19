export class BasicQuerySearchFilter {
  public query: string;

  constructor(obj: Partial<BasicQuerySearchFilter>) {
    Object.assign(this, { query: obj?.query || '' });
  }
}
