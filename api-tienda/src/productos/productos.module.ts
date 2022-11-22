import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productosController } from './controller/productos.controller';
import { productoEntity } from './entities/productos.entity';
import { ProductosService } from './service/productos/productos.service';

@Module({
  imports:[TypeOrmModule.forFeature([productoEntity])],
  controllers: [productosController],
  providers: [ProductosService]
})
export class ProductosModule {}
