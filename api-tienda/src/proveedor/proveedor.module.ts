import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { proveedorController } from './controller/proveedor.controller';
import { proveedorEntity } from './entities/proveedor.entity';
import { ProveedorService } from './service/proveedor/proveedor.service';

@Module({
  imports:[TypeOrmModule.forFeature([proveedorEntity])],
  controllers: [proveedorController],
  providers: [ProveedorService]
})
export class ProveedorModule {}
