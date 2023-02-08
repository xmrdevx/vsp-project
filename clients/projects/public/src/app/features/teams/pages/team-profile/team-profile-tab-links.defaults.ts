import { TabNavigationLink } from '@vsp/core';

export const defaultTeamProfileTabLinks: TabNavigationLink[] = [
  {
    label: 'Announcements',
    routerLink: './announcements',
    queryParams: { tab: 'announcements' },
    queryParamsHandling: 'merge'
  } as TabNavigationLink,
  {
    label: 'Cases',
    routerLink: './cases',
    queryParams: { tab: 'cases' },
    queryParamsHandling: 'merge'
  } as TabNavigationLink,
  {
    label: 'Videos',
    routerLink: './videos',
    queryParams: { tab: 'videos' },
    queryParamsHandling: 'merge'
  } as TabNavigationLink,
  {
    label: 'About',
    routerLink: './about',
    queryParams: { tab: 'about' },
    queryParamsHandling: 'merge'
  } as TabNavigationLink,
];