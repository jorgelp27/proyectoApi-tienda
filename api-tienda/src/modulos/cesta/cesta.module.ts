import { Module } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CestaController } from './cesta.controller';
import { Cesta } from './entities/cesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from '../productos/productos.module';
import { ProfileModule } from '../profile/profile.module';

@Module({
  controllers: [CestaController],
  providers: [CestaService],
  imports:[
    ProductosModule, ProfileModule,
    TypeOrmModule.forFeature([ Cesta ]),
]
})
export class CestaModule {}
