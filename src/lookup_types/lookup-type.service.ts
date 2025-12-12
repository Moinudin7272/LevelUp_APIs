import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LookupType } from './entity/lookup-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLookupTypeDto } from 'src/lookup_types/dtos/lookup-type.dto';

@Injectable()
export class LookupTypeService {
  constructor(
    @InjectRepository(LookupType)
    private lookupTypeRepo: Repository<LookupType>,
  ) {}

  create(data: CreateLookupTypeDto) {
    const type = this.lookupTypeRepo.create(data);
    return this.lookupTypeRepo.save(type);
  }

  findAll() {
    return this.lookupTypeRepo.find();
  }

async findOne(id: string) {
  const type = await this.lookupTypeRepo.findOne({ where: { id } });
  if (!type) throw new NotFoundException('Lookup Type not found');
  return type;
}
}
