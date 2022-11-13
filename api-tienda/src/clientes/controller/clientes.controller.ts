import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientesDto } from '../dto/clientes.dto/clientes.dto';
import { ClientesService } from '../service/clientes/clientes.service';

@Controller('clientes')
export class clientesController {
    constructor(private clientesService: ClientesService) {}


    @Post('/')
    create(@Body() clientes: ClientesDto): ClientesDto {
        return this.clientesService.create(clientes);
    }

    @Get('/')
    findAll(): ClientesDto[] {
        return this.clientesService.findAll();

    }

}
