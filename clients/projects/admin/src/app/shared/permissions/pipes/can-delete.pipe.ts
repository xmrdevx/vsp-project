import { Pipe, PipeTransform } from '@angular/core';

type UserModulesAndPermissionsMap = any;
type PermissionNames = any;

@Pipe({
  name: 'vspCanDelete',
  standalone: true,
})
export class VspCanDeletePipe implements PipeTransform {
  public transform(
    userModulePermissionsMap: UserModulesAndPermissionsMap | null,
    permissionName: PermissionNames | null | undefined
  ): boolean {
    return userModulePermissionsMap && permissionName && userModulePermissionsMap?.permissions.hasOwnProperty(permissionName)
      ? userModulePermissionsMap?.permissions[permissionName]?.canDelete || false
      : false;
  }
}
