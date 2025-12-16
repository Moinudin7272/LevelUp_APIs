import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
