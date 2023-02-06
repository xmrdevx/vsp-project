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

  constructor(args: any) {
    Object.assign(this, {
      streamId: args?.streamId,
      streamKey: args?.streamKey
    });
  }
}
