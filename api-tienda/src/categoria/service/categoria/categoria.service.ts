import { Injectable } from '@nestjs/common';
import { CategoriaDto } from '../../dto/categoria.dto';

@Injectable()
export class CategoriaService {

    public categoria: CategoriaDto[] = [];

    create(categoria: CategoriaDto):CategoriaDto {
        this.categoria.push(categoria);
        return categoria;
    }

    findAll(): CategoriaDto[] {
        return this.categoria
    }



    
}
