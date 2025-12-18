import { ManyToMany,Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,} from 'typeorm';
import { DefaultEntity } from 'src/common/default.entity';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';

@Entity('roles')
export class Role extends DefaultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: true })
  is_active: boolean;

  // Many-to-Many with Users
  @ManyToMany(() => User, (user) => user.roles)
  users: User[];  
}
