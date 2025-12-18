import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { LookupTypeModule } from './lookup_types/lookup-type.module';
import { LookupModule } from './lookups/lookup.module';
import { Role } from './roles/entity/roles.entity';
import { RolesModule } from './roles/roles.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'levelup_db',
      autoLoadEntities: true,  // Automatically loads all entities
      synchronize: true,       // Disable in production
    }),
    
    UserModule,
    LookupTypeModule,
    LookupModule,
    RolesModule,
  ],
})
export class AppModule {}
