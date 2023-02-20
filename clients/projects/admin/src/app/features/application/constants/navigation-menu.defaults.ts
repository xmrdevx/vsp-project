import { AdminNavigationLink } from '@vsp/admin/core/models'

export const defaultNavigationMenu: AdminNavigationLink[] = [
  {
    label: 'Dashboard',
    routerLink: '/app/dashboard',
    icon: 'dashboard',
    children: [
      {
        label: 'Overview',
        routerLink: '/app/dashboard/overview',
        
      },
    ]
  },
  {
    label: 'Offenders',
    routerLink: '/app/offenders',
    icon: 'team',
    children: [
      {
        label: 'Create Offender',
        routerLink: '/app/offenders/create',
      },
      {
        label: 'Manage Offenders',
        routerLink: '/app/offenders/manage',
      },
    ]
  },
  {
    label: 'Cases',
    routerLink: '/app/cases',
    icon: 'folder-view',
    children: [
      {
        label: 'Create Case',
        routerLink: '/app/cases/create',
      },
      {
        label: 'My Cases',
        routerLink: '/app/cases/mine',
      },
      {
        label: 'Manage Cases',
        routerLink: '/app/cases/manage',
      },
    ]
  },
  {
    label: 'Missing',
    icon: 'idcard',
    children: [
      {
        label: 'Create Missing',
        routerLink: '/app/missing/create',
      },
      {
        label: 'Manage Missing',
        routerLink: '/app/missing/manage',
      },
    ]
  },
  {
    label: 'Security',
    icon: 'lock',
    children: [
      {
        label: 'General',
        routerLink: '/app/security/general',
      },
      {
        label: 'Permissions',
        routerLink: '/app/security/permissions',
      }
    ]
  },
  {
    label: 'Administration',
    routerLink: '/app/admin',
    icon: 'setting',
    children: [
      {
        label: 'Settings',
        routerLink: '/app/admin/settings',
      },
      {
        label: 'User Accounts',
        routerLink: '/app/admin/user-accounts',
      },
    ]
  },
  // @Note: Below is an example of submenu link
  // {
  //   label: 'Settings',
  //   icon: 'setting',
  //   children: [
  //     {
  //       label: 'Settings Sub',
  //       routerLink: '/settings/sub',
  //     }
  //   ]
  // }
];
