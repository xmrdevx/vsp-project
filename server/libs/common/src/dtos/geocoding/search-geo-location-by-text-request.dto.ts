export class SearchGeoLocationsByTextRequestDto {
  public text: string;

  constructor(args: Partial<SearchGeoLocationsByTextRequestDto>) {
    Object.assign(this, {
      text: args?.text || ''
    });
  }
}
