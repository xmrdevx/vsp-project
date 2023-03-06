export class SearchGeoLocationsByTextRequestDto {
  public text: string;
  public country: string;

  constructor(args: Partial<SearchGeoLocationsByTextRequestDto>) {
    Object.assign(this, {
      text: args?.text || '',
      country: args?.country || ''
    });
  }
}
