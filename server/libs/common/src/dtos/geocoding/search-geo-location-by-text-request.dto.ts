export class SearchGeoLocationsByTextRequestDto {
  public text: string;

  constructor(args: any) {
    Object.assign(this, {
      text: args?.text || ''
    });
  }
}
