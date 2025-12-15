import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { LookupService } from './lookup.service';
import { CreateLookupDto, UpdateLookupDto } from './dtos/lookup.dto';

@Controller('lookups')
export class LookupController {
  constructor(private service: LookupService) {}

  @Post()
  create(@Body() data: CreateLookupDto) {
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

  // ADD UPDATE
  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateLookupDto) {
    return this.service.update(id, data);
  }
}