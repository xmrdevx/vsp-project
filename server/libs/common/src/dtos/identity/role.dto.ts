import { BaseDto } from '../base.dto';

export class RoleDto extends BaseDto {
  public name: string;

  constructor(obj: Partial<RoleDto>) {
    super();
    Object.assign(this, {
      id: obj?.id,
      createdOn: obj?.createdOn,
      updatedOn: obj?.updatedOn,
      name: obj?.name,
    });
  }
}