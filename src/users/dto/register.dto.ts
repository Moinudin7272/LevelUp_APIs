import { IsString, IsEmail, IsOptional, IsDateString } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsOptional()
  @IsDateString()
  dob?: string;

  @IsOptional()
  @IsString()
  gender?: string;
}
