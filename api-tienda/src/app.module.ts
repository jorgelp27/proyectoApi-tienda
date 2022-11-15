import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProductosModule } from './productos/productos.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [ClientesModule, ProductosModule, ProveedorModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
