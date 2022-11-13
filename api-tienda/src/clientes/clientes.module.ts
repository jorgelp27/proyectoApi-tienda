import { Module } from '@nestjs/common';
import { clientesController } from './controller/clientes.controller';
import { ClientesService } from './service/clientes/clientes.service';

@Module({
  controllers: [clientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
