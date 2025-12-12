import { IsString, IsOptional } from 'class-validator';

export class CreateLookupTypeDto {
  @IsString()
  name: string;

  @IsOptional()
  is_active?: boolean;
}
