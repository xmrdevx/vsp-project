import { BaseDto } from '../base.dto';

export class CaseDto extends BaseDto {


  constructor(obj: any) {
    super();
    Object.assign(this, {
      id: obj.id,
      createdAt: obj.createdAt,
      updatedAt: obj.updatedAt,
      
    } satisfies CaseDto);
  }
}
