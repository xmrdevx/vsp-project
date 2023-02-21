import { QueryParamsHandling } from '@angular/router';

import { NavigationLink } from '@vsp/core';

export interface AdminNavigationLink extends NavigationLink {
  children?: AdminNavigationLink[],
}

export interface TabNavigationLink extends NavigationLink {
  queryParams?: {[key: string]: string},
  queryParamsHandling?: QueryParamsHandling | null | undefined
}
