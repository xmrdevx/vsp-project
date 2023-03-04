import { LinkType, Visibility } from '../../enums';

export interface Link {
  type: LinkType,
  name: string,
  url: string,
  visibility: Visibility,
}
