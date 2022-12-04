import { Module } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CestaController } from './cesta.controller';
import { Cesta } from './entities/cesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CestaController],
  providers: [CestaService],
  imports:[TypeOrmModule.forFeature([Cesta])]
})
export class CestaModule {}
