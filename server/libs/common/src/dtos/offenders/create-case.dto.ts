import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';

import { CaseStatus } from '../../enums/case-status.enum';
import { Visibility } from '../../enums/visibility.enum';

export class CreateCaseDto {
  @IsDefined()
  @IsNotEmpty()
  public openedOn: Date = new Date();

  @IsDefined()
  @IsNotEmpty()
  public status: CaseStatus = CaseStatus.OPEN;

  @IsDefined()
  @IsNotEmpty()
  public visibility: Visibility = Visibility.PRIVATE;

  @IsDefined()
  @IsNotEmpty()
  public summary: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public createdById: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public updatedById: string;

  @ApiProperty({ readOnly: true })
  @IsDefined()
  @IsNotEmpty()
  public tenantId: string;

  @ApiProperty({ readOnly: true })
  public offenderId: string;
}
