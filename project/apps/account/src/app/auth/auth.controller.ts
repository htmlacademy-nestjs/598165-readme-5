import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillDto } from '@project/shared/helpers';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { UserRdo } from './rdo/user.rdo';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    public readonly authService: AuthService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully registered.',
  })
  @Post('register')
  public async register(@Body() dto: CreateUserDto) {
    const user = await this.authService.register(dto);
    return fillDto(UserRdo, user.toPlain());
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'The user has been successfully logged in.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or email is wrong.',
  })
  @Post('login')
  public async login(@Body() dto: LoginDto) {
    const user = await this.authService.verify(dto);
    return fillDto(LoggedUserRdo, user);
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'The user has been successfully found.',
  })
  @Get(':id')
  public async get(@Param('id') id: string) {
    const user = await this.authService.get(id);
    return fillDto(UserRdo, user.toPlain());
  }

}
