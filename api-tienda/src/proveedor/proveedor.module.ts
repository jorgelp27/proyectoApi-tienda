import { Module } from '@nestjs/common';
import { proveedorController } from './controller/proveedor.controller';
import { ProveedorService } from './service/proveedor/proveedor.service';

@Module({
  controllers: [proveedorController],
  providers: [ProveedorService]
})
export class ProveedorModule {}
