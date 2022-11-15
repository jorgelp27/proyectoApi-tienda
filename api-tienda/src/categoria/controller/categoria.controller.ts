import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriaDto } from '../dto/categoria.dto';
import { CategoriaService } from '../service/categoria/categoria.service';

@Controller('categoria')
export class CategoriaController {
    clientesService: any;
    
    constructor(private categoriaService: CategoriaService) {}


    @Post('/')
    create(@Body() categoria: CategoriaDto): CategoriaDto {
        return this.categoriaService.create(categoria);
    }

    @Get('/')
    findAll(): CategoriaDto[] {
        return this.categoriaService.findAll();

    }


    
    
}
