import { IsString, IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateLookupDto {
  @IsString()
  name: string;

  @IsString()
  short_name: string;

  @IsUUID()
  lookup_type_id: string;

  @IsOptional()
  is_active?: boolean;
}

export class UpdateLookupDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  short_name?: string;

  @IsOptional()
  @IsUUID()
  lookup_type_id?: string;

  @IsOptional()
  is_active?: boolean;
}
