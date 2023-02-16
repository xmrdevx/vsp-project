import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';

export class StreamPreConnectValidationRequestDto {
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  public streamId: string;

  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  public streamKey: string;

  constructor(obj: Partial<StreamPreConnectValidationRequestDto>) {
    Object.assign(this, {
      streamId: obj?.streamId,
      streamKey: obj?.streamKey
    });
  }
}
