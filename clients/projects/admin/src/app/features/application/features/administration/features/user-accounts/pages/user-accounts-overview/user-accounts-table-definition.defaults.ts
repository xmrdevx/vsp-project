import { ColumnDefinition, ColumnType, TableDefinition } from '@vsp/datatable';

export const defaultUserAccountsTableDefinition: TableDefinition = {
  title: 'User Accounts',
  columns: [
    {
      label: 'Profile',
      property: 'profile.avatarUrl',
      type: ColumnType.IMAGE,
      isVisible: true,
      canModify: false,
      width: '75px'
    },
    {
      label: 'Username',
      property: 'username',
      type: ColumnType.TEXT,
      isVisible: true,
      canModify: false,
      width: '200px',
      sortable: true

    } as ColumnDefinition,
    {
      label: 'Email',
      property: 'email',
      type: ColumnType.EMAIL,
      isVisible: true,
      canModify: false,
      width: '200px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'First name',
      property: 'profile.firstName',
      type: ColumnType.TEXT,
      isVisible: true,
      canModify: true,
      width: '200px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'Last Name',
      property: 'profile.lastName',
      type: ColumnType.TEXT,
      isVisible: true,
      canModify: true,
      width: '200px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'Enabled',
      property: 'isLockedOut',
      type: ColumnType.BOOLEAN_YES_NO_BADGE_INVERSE,
      isVisible: true,
      canModify: true,
      width: '100px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'Created On',
      property: 'createdOn',
      type: ColumnType.DATE,
      isVisible: false,
      canModify: true,
      width: '150px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'Updated On',
      property: 'updatedOn',
      type: ColumnType.DATE,
      isVisible: false,
      canModify: true,
      width: '150px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'Deleted On',
      property: 'deletedOn',
      type: ColumnType.DATE,
      isVisible: false,
      canModify: true,
      width: '150px',
      sortable: true
    } as ColumnDefinition,
  ]
} as TableDefinition;

export const getDefaultUserAccountsTableDefinition = (): TableDefinition => {
  return JSON.parse(JSON.stringify(defaultUserAccountsTableDefinition)) as TableDefinition
};