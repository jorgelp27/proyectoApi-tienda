import { Module } from '@nestjs/common';
import { productosController } from './controller/productos.controller';
import { ProductosService } from './service/productos/productos.service';

@Module({
  controllers: [productosController],
  providers: [ProductosService]
})
export class ProductosModule {}
