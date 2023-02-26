import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class CreateOffenderCommentDto {
  @IsDefined()
  @IsNotEmpty()
  public message: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public commentedById: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public createdById: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public updatedById: string;

  @ApiProperty({ readOnly: true })
  // @IsDefined()
  // @IsNotEmpty()
  public offenderId: string;
}
