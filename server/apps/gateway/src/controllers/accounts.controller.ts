import { Body, Controller, Get, Head, HttpCode, HttpStatus, Inject, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, Observable, of, throwError } from 'rxjs';

import { LoggerService } from '@vsp/logger';
import { EnrichBodyWithTenantInterceptor, JwtAuthGuard } from '@vsp/authorization';

import { 
  AccountUsersSearchFilter,
  confirmEmailCommand, 
  ConfirmEmailDto, 
  createAccountUserCommand, 
  CreateResourceRequest, 
  CreateUserDto, 
  doesEmailExistCommand, 
  doesUsernameExistCommand, 
  forgotPasswordCommand, 
  ForgotPasswordDto, 
  IDENTITY_SERVICE_TOKEN, 
  IPageable, 
  lockoutAccountUserCommand, 
  LockoutUserRequest, 
  Page, 
  PageRequest, 
  registerAccountCommand, 
  RegistrationDto, 
  resetPasswordCommand, 
  ResetPasswordDto, 
  ResponseMessage, 
  searchAccountUsersCommand, 
  SearchAccountUsersRequest, 
  SimpleQueryRequestDto, 
  updateAccountUserCommand, 
  UpdateResourceRequest, 
  UpdateUserDto, 
  UserDto } from '@vsp/common';

import { defaultSortColumn, defaultSortDirection } from '../constants/query-params.defaults';

@ApiTags('identity')
@Controller('accounts')
export class AccountsController {
  @Inject(IDENTITY_SERVICE_TOKEN)
  private readonly _identityServiceClient: ClientProxy;
  
  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(AccountsController.name);
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public registerAccount(@Body() registrationDto: RegistrationDto): Observable<UserDto> {
    return this._identityServiceClient
      .send(registerAccountCommand, registrationDto)
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  public forgotPassword(@Body() forgotPassword: ForgotPasswordDto): Observable<any> {
    return this._identityServiceClient
      .send(forgotPasswordCommand, forgotPassword)
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  public resetPassword(@Body() resetPassword: ResetPasswordDto): Observable<any> {
    return this._identityServiceClient
      .send(resetPasswordCommand, resetPassword)
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Post('confirm-email')
  @HttpCode(HttpStatus.OK)
  public confirmEmail(@Body() confirmEmail: ConfirmEmailDto): Observable<any> {
    return this._identityServiceClient
      .send(confirmEmailCommand, confirmEmail)
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Head('usernames')
  @HttpCode(HttpStatus.NO_CONTENT)
  public doesUsernameExist(@Query('query') username: string): Observable<any> {
    return this._identityServiceClient
      .send(doesUsernameExistCommand, new SimpleQueryRequestDto({ query: username }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Head('emails')
  @HttpCode(HttpStatus.NO_CONTENT)
  public doesEmailExist(@Query('query') email: string): Observable<any> {
    return this._identityServiceClient
      .send(doesEmailExistCommand, new SimpleQueryRequestDto({ query: email }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(EnrichBodyWithTenantInterceptor)
  @Get('users/search')
  public searchAccountUsers(
    @Body('tenantId') tenantId: string,
    @Query('query') query: string = '',
    @Query('index') index: number = 0,
    @Query('size') size: number = 10,
    @Query('column') column: string = defaultSortColumn,
    @Query('direction') direction: string = defaultSortDirection
  ): Observable<Page<UserDto>> {
    const pageable: IPageable = PageRequest.from(index, size, column, direction);
    const filter: AccountUsersSearchFilter = new AccountUsersSearchFilter({ query, tenantId });
    return this._identityServiceClient
      .send(searchAccountUsersCommand, new SearchAccountUsersRequest({ filter, pageable }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(EnrichBodyWithTenantInterceptor)
  @Post('users')
  public createAccountUser(@Body() createAccountUser: CreateUserDto): Observable<UserDto> {
    return this._identityServiceClient
      .send(
        createAccountUserCommand, 
        new CreateResourceRequest<CreateUserDto>({ resource: createAccountUser })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(EnrichBodyWithTenantInterceptor)
  @Put('users/:userId')
  public updateAccountUser(@Param('userId') userId: string, @Body() updateUser: UpdateUserDto): Observable<UserDto> {
    return this._identityServiceClient
      .send(
        updateAccountUserCommand,
        new UpdateResourceRequest<UpdateUserDto>({
          resourceId: userId,
          resource: updateUser
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(EnrichBodyWithTenantInterceptor)
  @Put('users/:userId/lockout')
  public lockoutAccountUser(
    @Param('userId') userId: string, 
    @Body() lockoutUserRequest: LockoutUserRequest
  ): Observable<ResponseMessage<void>> {
    return this._identityServiceClient
      .send(
        lockoutAccountUserCommand,
        new UpdateResourceRequest<LockoutUserRequest>({
          resourceId: userId,
          resource: lockoutUserRequest
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }
}
