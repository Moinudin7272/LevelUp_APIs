import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateLookupTypeDto {
  @IsString()
  name: string;

  @IsOptional()
  is_active?: boolean;
}
