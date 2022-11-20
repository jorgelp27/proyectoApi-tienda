import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriaDto } from 'src/categoria/dto/categoria.dto';
import { ClientesDto } from '../dto/clientes.dto/clientes.dto';
import { ClientesService } from '../service/clientes/clientes.service';

@Controller('clientes')
export class clientesController {
    categoriaService: any;
    constructor(private clientesService: ClientesService) {}


    @Post('/')
    create(@Body() clientes: ClientesDto): ClientesDto {
        return this.clientesService.create(clientes);
    }

    @Get('/')
    findAll(): CategoriaDto[] {
        return this.categoriaService.findAll();

    }



}
