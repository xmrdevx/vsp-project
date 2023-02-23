export class PermissionTemplatesSearchFilter {
  public query: string | null | undefined;
  public tenantId: string;

  constructor(obj: Partial<PermissionTemplatesSearchFilter>) {
    Object.assign(this, obj);
  }
}
