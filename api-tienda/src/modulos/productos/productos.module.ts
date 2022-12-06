import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports: [
    CategoriaModule,
    TypeOrmModule.forFeature([Producto])
  ]
})
export class ProductosModule {}
