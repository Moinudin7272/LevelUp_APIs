import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LookupType } from './entity/lookup-type.entity';
import { LookupTypeService } from './lookup-type.service';
import { LookupTypeController } from './lookup-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LookupType])],
  controllers: [LookupTypeController],
  providers: [LookupTypeService],
  exports: [LookupTypeService],
})
export class LookupTypeModule {}
