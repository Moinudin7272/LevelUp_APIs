import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entity/roles.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateRoleDto, creatorId: string) {
    const creator = await this.userRepository.findOne({ where: { id: creatorId } });
    if (!creator) throw new Error('Creator user not found');

    const role = this.roleRepository.create({
      ...dto,
      users: [creator], // creator automatically added
    });

    return this.roleRepository.save(role);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateRoleDto, userId?: number) {
    const role = await this.findOne(id);
    if (!role) throw new NotFoundException('Role not found');

    Object.assign(role, dto, { updated_by: userId });
    return this.roleRepository.save(role);
  }

  async remove(id: number) {
    const role = await this.findOne(id);
    if (!role) throw new NotFoundException('Role not found');

    return this.roleRepository.remove(role);
  }

}


