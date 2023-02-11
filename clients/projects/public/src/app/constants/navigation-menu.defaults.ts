import { NavigationLink } from '@vsp/core';

export const defaultLeftNavigationMenu: NavigationLink[] = [
  {
    label: 'Home',
    routerLink: '/home',
    icon: 'home',
  },
  {
    label: 'Explore',
    routerLink: '/explore',
    icon: 'global',
  },
  {
    label: 'Offenders',
    routerLink: '/offenders',
    icon: 'user',
  },
  // {
  //   label: 'Watch',
  //   routerLink: '/videos',
  //   icon: 'video-camera',
  // },
  // {
  //   label: 'Teams',
  //   routerLink: '/teams',
  //   icon: 'team',
  // },
];

export const defaultRightNavigationMenu: NavigationLink[] = [
  // {
  //   label: 'Missing',
  //   routerLink: '/missing',
  //   icon: 'search'
  // },
  {
    label: 'Report',
    routerLink: '/report',
    icon: 'mail',
  },
  {
    label: 'Help',
    routerLink: '/help',
    icon: 'question-circle',
  },
  {
    label: 'Contact',
    routerLink: '/contact',
    icon: 'contacts'
  }
];

export const defaultAccountNavigationMenu: NavigationLink[] = [
  {
    label: 'Profile',
    routerLink: '/account/profile',
    icon: 'profile'
  }
];

