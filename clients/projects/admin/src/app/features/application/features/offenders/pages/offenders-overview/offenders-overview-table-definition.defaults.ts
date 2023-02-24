import { ColumnDefinition, ColumnType, TableDefinition } from '@vsp/datatable';

export const defaultOffendersOverviewTableDefinition: TableDefinition = {
  title: 'Offenders Overview',
  columns: [
    {
      label: 'Profile',
      property: 'avatarUrl',
      type: ColumnType.IMAGE,
      isVisible: true,
      canModify: false,
      width: '75px'
    },
    {
      label: 'Last Name',
      property: 'lastName',
      type: ColumnType.TEXT,
      isVisible: true,
      canModify: false,
      width: '250px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'First Name',
      property: 'firstName',
      type: ColumnType.TEXT,
      isVisible: true,
      canModify: false,
      width: '250px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'Summary',
      property: 'summary',
      type: ColumnType.TEXT_TRUNCATED,
      isVisible: true,
      canModify: false,
      width: undefined,
      sortable: false,
      options: {
        truncateLength: 200
      }
    },
    {
      label: 'Created On',
      property: 'createdOn',
      type: ColumnType.DATE,
      isVisible: false,
      canModify: true,
      width: '125px'
    } as ColumnDefinition,
    {
      label: 'Updated On',
      property: 'updatedOn',
      type: ColumnType.DATE,
      isVisible: false,
      canModify: true,
      width: '125px'
    } as ColumnDefinition
  ]
} as TableDefinition;

export const getDefaultOffendersOverviewTableDefinition = (): TableDefinition => {
  return JSON.parse(JSON.stringify(defaultOffendersOverviewTableDefinition)) as TableDefinition
};
