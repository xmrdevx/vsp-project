import { Pipe, PipeTransform } from '@angular/core';

type UserModulesAndPermissionsMap = any;
type PermissionNames = any;
type ModulePermissionNames = any;

@Pipe({
  name: 'vspHasModulePermission',
  standalone: true,
})
export class VspHasModulePermissionPipe implements PipeTransform {
  public transform(
    userModulePermissionsMap: UserModulesAndPermissionsMap | null, 
    moduleName: ModulePermissionNames | null | undefined
  ): boolean {
    return userModulePermissionsMap && moduleName && userModulePermissionsMap?.modules?.hasOwnProperty(moduleName)
      ? userModulePermissionsMap?.modules[moduleName]?.hasAccess || false 
      : false;
  }
}
