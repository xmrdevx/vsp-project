import { ColumnDefinition, ColumnType, TableDefinition } from '@vsp/datatable';

export const defaultPermissionTemplatesTableDefinition: TableDefinition = {
  title: 'Permisssion Templates',
  columns: [
    {
      label: 'Name',
      property: 'name',
      type: ColumnType.TEXT,
      isVisible: true,
      canModify: false,
      width: '300px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'Description',
      property: 'description',
      type: ColumnType.TEXT,
      isVisible: true,
      canModify: false,
      width: '400px',
      sortable: true
    } as ColumnDefinition,
    {
      label: 'Created On',
      property: 'createdOn',
      type: ColumnType.DATE,
      isVisible: false,
      canModify: true,
      width: '125px'
    } as ColumnDefinition,
    {
      label: 'Created By',
      property: 'createdBy.userName',
      type: ColumnType.EMAIL,
      isVisible: false,
      canModify: true,
      width: '200px'
    } as ColumnDefinition,
    {
      label: 'Updated On',
      property: 'updatedOn',
      type: ColumnType.DATE,
      isVisible: false,
      canModify: true,
      width: '125px'
    } as ColumnDefinition,
    {
      label: 'Updated By',
      property: 'updatedBy.userName',
      type: ColumnType.EMAIL,
      isVisible: false,
      canModify: true,
      width: '200px'
    } as ColumnDefinition,
    {
      label: 'Deleted On',
      property: 'deletedOn',
      type: ColumnType.DATE,
      isVisible: false,
      canModify: true,
      width: '125px'
    } as ColumnDefinition
  ]
} as TableDefinition;

export const getDefaultSecurityPermissionsTableDefinition = (): TableDefinition => {
  return JSON.parse(JSON.stringify(defaultPermissionTemplatesTableDefinition)) as TableDefinition
};
