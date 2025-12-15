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
import { DefaultEntity } from '../../common/default.entity';


@Entity('lookups')
export class Lookup extends DefaultEntity {
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

}
