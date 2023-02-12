import { IsDefined, IsNotEmpty } from 'class-validator';

export class DeleteCaseDto {
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

  constructor(obj: Partial<DeleteCaseDto>) {
    Object.assign(this, obj);
  }
}
