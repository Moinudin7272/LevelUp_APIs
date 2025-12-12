import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { LookupType } from '../../lookup_types/entity/lookup-type.entity';

@Entity('lookups')
export class Lookup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  short_name: string;

  @ManyToOne(() => LookupType)
  @JoinColumn({ name: 'lookup_type_id' })
  lookup_type: LookupType;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;
}
