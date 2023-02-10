export class GetLatestOffendersRequestDto {
  public count: number;

  constructor(obj: any) {
    Object.assign(this, { count: obj.count || 0 })
  }
}