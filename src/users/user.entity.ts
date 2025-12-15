import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
<<<<<<< HEAD
import { DefaultEntity } from '../common/default.entity';


@Entity('users')
export class User extends DefaultEntity {
=======

@Entity('users')
export class User {
>>>>>>> 3c08029363c80623a4025ce9489171a17c4d2e4b
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  is_active: boolean;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ type: 'date', nullable: true })
  dob: Date;

  @Column({ nullable: true })
  gender: string;

  @Column({ default: 'user' })
  type: string;

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
