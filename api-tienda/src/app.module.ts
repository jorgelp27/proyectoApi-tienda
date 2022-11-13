import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProductosModule } from './productos/productos.module';
import { ProveedorModule } from './proveedor/proveedor.module';

@Module({
  imports: [ClientesModule, ProductosModule, ProveedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
