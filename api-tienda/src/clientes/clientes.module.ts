import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clientesController } from './controller/clientes.controller';
import { clientesEntity } from './entities/clientes.entity';
import { ClientesService } from './service/clientes/clientes.service';

@Module({
  imports:[TypeOrmModule.forFeature([clientesEntity])],
  controllers: [clientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
