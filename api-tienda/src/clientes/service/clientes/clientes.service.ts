import { Injectable } from '@nestjs/common';
import { ClientesDto } from 'src/clientes/dto/clientes.dto/clientes.dto';

@Injectable()
export class ClientesService {

    public clientes: ClientesDto[] = [];

    create(clientes: ClientesDto):ClientesDto {
        this.clientes.push(clientes);
        return clientes;
    }

    findAll(): ClientesDto[] {
        return this.clientes
    }


}
