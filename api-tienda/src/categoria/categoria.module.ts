import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controller/categoria.controller';
import { categoriaEntity } from './entities/categoria.entity';
import { CategoriaService } from './service/categoria/categoria.service';

@Module({
  imports:[TypeOrmModule.forFeature([categoriaEntity])],
  controllers: [CategoriaController],
  providers: [CategoriaService]
})
export class CategoriaModule {}
