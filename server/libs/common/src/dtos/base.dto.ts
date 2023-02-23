export abstract class BaseDto {
  public id: string;
  public createdOn: Date;
  public updatedOn: Date;
  public deletedOn: Date | null | undefined;
}
