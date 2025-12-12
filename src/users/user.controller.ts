import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from 'src/users/dto/register.dto';
import { SignInDto } from 'src/users/dto/signin.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.userService.register(dto);
  }

  @Post('signin')
  signIn(@Body() dto: SignInDto) {
    return this.userService.signIn(dto);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }
}
