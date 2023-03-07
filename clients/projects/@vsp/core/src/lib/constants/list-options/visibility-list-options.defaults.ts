import { Visibility } from '../../enums';
import { ListOption } from '../../models';

export const defaultVisibilityListOptions: ListOption[] = [
  {
    label: Visibility.PRIVATE,
    value: Visibility.PRIVATE
  } as ListOption,
  {
    label: Visibility.PUBLIC,
    value: Visibility.PUBLIC
  } as ListOption,
];
