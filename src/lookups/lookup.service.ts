import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lookup } from './enitity/lookup.entity';
import { Repository } from 'typeorm';
import { CreateLookupDto, UpdateLookupDto } from './dtos/lookup.dto';
import { LookupType } from '../lookup_types/entity/lookup-type.entity';

@Injectable()
export class LookupService {
  constructor(
    @InjectRepository(Lookup)
    private lookupRepo: Repository<Lookup>,

    @InjectRepository(LookupType)
    private lookupTypeRepo: Repository<LookupType>,
  ) {}

  async create(data: CreateLookupDto) {
    const lookupType = await this.lookupTypeRepo.findOne({
      where: { id: data.lookup_type_id },
    });

    if (!lookupType) throw new NotFoundException('Lookup Type not found');

    const lookup = this.lookupRepo.create({
      ...data,
      lookup_type: lookupType,
    });

    return this.lookupRepo.save(lookup);
  }

  findAll() {
    return this.lookupRepo.find({ relations: ['lookup_type'] });
  }

  async findOne(id: string) {
    const lookup = await this.lookupRepo.findOne({
      where: { id },
      relations: ['lookup_type'],
    });
    if (!lookup) throw new NotFoundException('Lookup not found');
    return lookup;
  }

  async update(id: string, data: UpdateLookupDto) {
    const lookup = await this.lookupRepo.findOne({ where: { id } });
    if (!lookup) throw new NotFoundException('Lookup not found');

    if (data.lookup_type_id) {
      const lookupType = await this.lookupTypeRepo.findOne({
        where: { id: data.lookup_type_id },
      });
      if (!lookupType) throw new NotFoundException('Lookup Type not found');
      lookup.lookup_type = lookupType;
    }

    Object.assign(lookup, data);
    return this.lookupRepo.save(lookup);
  }
}
