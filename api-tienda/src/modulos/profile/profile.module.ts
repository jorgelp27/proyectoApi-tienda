import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { profile } from 'console';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { ClientesModule } from '../clientes/clientes.module';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [
    TypeOrmModule.forFeature([Profile]),
    ClientesModule
  
  ],
  exports: [ ProfileService ]
    
})
export class ProfileModule {}
