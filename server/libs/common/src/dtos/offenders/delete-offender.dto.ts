import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class DeleteOffenderDto {
  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public deletedById: string

  constructor(obj: Partial<DeleteOffenderDto>) {
    Object.assign(this, obj);
  }
}
