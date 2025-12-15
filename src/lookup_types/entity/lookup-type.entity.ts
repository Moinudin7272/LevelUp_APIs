import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
<<<<<<< HEAD
import { DefaultEntity } from '../../common/default.entity';


@Entity('lookup_types')
export class LookupType extends DefaultEntity {
=======

@Entity('lookup_types')
export class LookupType {
>>>>>>> 3c08029363c80623a4025ce9489171a17c4d2e4b
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ default: true })
  is_active: boolean;

<<<<<<< HEAD
=======
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;
>>>>>>> 3c08029363c80623a4025ce9489171a17c4d2e4b
}
