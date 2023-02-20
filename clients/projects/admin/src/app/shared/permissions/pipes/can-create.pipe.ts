import { Pipe, PipeTransform } from '@angular/core';

type UserModulesAndPermissionsMap = any;
type PermissionNames = any;

@Pipe({
  name: 'vspCanCreate',
  standalone: true,
})
export class VspCanCreatePipe implements PipeTransform {
  public transform(
    userModulePermissionsMap: UserModulesAndPermissionsMap | null,
    permissionName: PermissionNames | null | undefined
  ): boolean {
    return userModulePermissionsMap && permissionName && userModulePermissionsMap?.permissions.hasOwnProperty(permissionName)
      ? userModulePermissionsMap?.permissions[permissionName]?.canCreate || false
      : false;
  }
}
