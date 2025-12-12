import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LookupTypeService } from './lookup-type.service';
import { CreateLookupTypeDto } from 'src/lookup_types/dtos/lookup-type.dto';

@Controller('lookup-types')
export class LookupTypeController {
  constructor(private service: LookupTypeService) {}

  @Post()
  create(@Body() data: CreateLookupTypeDto) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
