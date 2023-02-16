export class GetLatestOffendersRequestDto {
  public count: number;

  constructor(obj: Partial<GetLatestOffendersRequestDto>) {
    Object.assign(this, { count: obj.count || 0 })
  }
}