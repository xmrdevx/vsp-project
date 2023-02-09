export class OffendersSearchFilter {
  query: string | null

  constructor(obj: any) {
    Object.assign(this, { query: obj?.query || null } satisfies OffendersSearchFilter)
  }
}
