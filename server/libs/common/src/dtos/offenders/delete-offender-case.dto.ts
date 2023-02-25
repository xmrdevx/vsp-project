import { IsDefined, IsNotEmpty } from 'class-validator';

export class DeleteOffenderCaseDto {
  @IsDefined()
  @IsNotEmpty()
  public offenderId: string;
  
  @IsDefined()
  @IsNotEmpty()
  public caseId: string;

  @IsDefined()
  @IsNotEmpty()
  public deletedById: string;

  @IsDefined()
  @IsNotEmpty()
  public deletedOn: Date = new Date();

  constructor(obj: Partial<DeleteOffenderCaseDto>) {
    Object.assign(this, obj);
  }
}
