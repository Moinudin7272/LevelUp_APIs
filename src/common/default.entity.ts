import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import{ BaseEntity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class  DefaultEntity extends BaseEntity {
  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @Column({ type: 'uuid', nullable: true })
  created_by: string;

  @Column({ type: 'uuid', nullable: true })
  updated_by: string;
}
