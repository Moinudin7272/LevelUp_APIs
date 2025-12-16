import { Controller, Post, Body, Put, Param, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from 'src/users/dto/register.dto';
import { SignInDto } from 'src/users/dto/signin.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { responseMessage } from 'src/common/response-message';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const user = await this.userService.register(dto);
    const {password, ...result} = dto;
    

   return { "statusCode": HttpStatus.OK, message: responseMessage.FETCH_DATA, data: result };
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
