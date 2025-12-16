import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterDto } from 'src/users/dto/register.dto';
import { SignInDto } from 'src/users/dto/signin.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';




@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async register(data: RegisterDto) {
   

    const user = this.userRepo.create({
      ...data,
      password: data.password,
    });

    return this.userRepo.save(user);
  }

async signIn(data: SignInDto) {
  const user = await this.userRepo.findOne({
    where: { username: data.username },
  });

  if (!user) throw new NotFoundException('User not found');

  if (user.password !== data.password)
    throw new UnauthorizedException('Invalid password');

  const { password, ...result } = user;
  return result;
}


  async update(id: string, data: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    Object.assign(user, data);

    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    const { password, ...result } = user;
    return result;
  }

  async remove(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    await this.userRepo.remove(user);
    return { deleted: true };
  }
}
