import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { ProductosDto } from '../dto/productos.dto/productos.dto';
import { ProductosService } from '../service/productos/productos.service';

@Controller('productos')
export class productosController {

    constructor(private clientesService: ProductosService) {}


    @Post('/')
    create(@Body() clientes: ProductosDto): ProductosDto {
        return this.clientesService.create(clientes);
    }

    @Get('/')
    findAll(): ProductosDto[] {
        return this.clientesService.findAll();

    }

}


