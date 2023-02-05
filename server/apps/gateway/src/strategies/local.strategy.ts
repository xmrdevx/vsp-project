import { Inject, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PassportStrategy } from '@nestjs/passport';
import { firstValueFrom } from 'rxjs';
import { Strategy } from 'passport-local';

import { LoggerService } from '@vsp/logger';
import { Credentials, IDENTITY_SERVICE_TOKEN, UserDetails, validateUserCommand } from '@vsp/common';
import { Request } from 'express';
import { validate } from 'class-validator';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  @Inject(IDENTITY_SERVICE_TOKEN)
  private readonly _identityServiceClient: ClientProxy;
  private readonly unauthorizedMessage: string = 'Invalid username/password';
  
  constructor(private readonly _logger: LoggerService) {
    /*
      @Note
      You can pass options to super to customerize passports local strategy such
      as the username and password fields expected on the request body.
      
      http://www.passportjs.org/concepts/authentication/strategies/
      
      Ex: super({ usernameField: 'email' })
    */
    super({ passReqToCallback: true });
    this._logger.setContext(LocalStrategy.name);
  }

  public async validate(request: Request): Promise<UserDetails> {
    try {
      const { username, password, clientId } = request.body;
      const payload: Credentials = new Credentials({ username, password, clientId });
      
      // Make sure the request body (Credentials Dto) is valid
      const payloadErrors = await validate(payload);
      if (payloadErrors?.length) {
        throw new UnauthorizedException(this.unauthorizedMessage)
      }
      
      const user = await firstValueFrom(
        this._identityServiceClient.send(validateUserCommand, payload)
      );

      if (!user) {
        throw new UnauthorizedException(this.unauthorizedMessage);
      }

      return user;
    } catch (error) {
      this._logger.error('Error validating username and password', error);
      throw error;
    }
  }
}
