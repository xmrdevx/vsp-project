import { LinkType } from '../../enums';
import { ListOption } from '../../models';

export const defaultLinkTypeListOptions: ListOption[] = [
  {
    label: LinkType.DOCUMENTATION,
    value: LinkType.DOCUMENTATION
  } as ListOption,
  {
    label: LinkType.SOCIAL,
    value: LinkType.SOCIAL
  } as ListOption,
  {
    label: LinkType.OTHER,
    value: LinkType.OTHER
  }
];
