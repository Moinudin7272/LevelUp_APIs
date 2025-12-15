import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './users/user.service';
import { RegisterDto } from './users/dto/register.dto';
import { SignInDto } from './users/dto/signin.dto';
import { UpdateUserDto } from './users/dto/update-user.dto';

@Controller('users')   // MUST be 'users'
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.usersService.register(registerDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.usersService.signIn(signInDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdateUserDto) {
    return this.usersService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
