import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lookup } from './enitity/lookup.entity';
import { LookupType } from '../lookup_types/entity/lookup-type.entity';
import { LookupService } from './lookup.service';
import { LookupController } from './lookup.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lookup, LookupType])],
  controllers: [LookupController],
  providers: [LookupService],
})
export class LookupModule {}
