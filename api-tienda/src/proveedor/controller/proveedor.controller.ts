import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProveedorDto } from '../dto/proveedor.dto/proveedor.dto';
import { ProveedorService } from '../service/proveedor/proveedor.service';

@Controller('proveedor')
export class proveedorController {

    constructor(private clientesService: ProveedorService) {}


    @Post('/')
    create(@Body() clientes: ProveedorDto): ProveedorDto {
        return this.clientesService.create(clientes);
    }

    @Get('/')
    findAll(): ProveedorDto[] {
        return this.clientesService.findAll();

    }

}
