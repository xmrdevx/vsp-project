import { Transform, TransformFnParams } from 'class-transformer';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
  @IsDefined()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  public name: string;

  constructor(obj: Partial<CreateAccountDto>) {
    Object.assign(this, obj);
  }
}
