import { Injectable } from '@nestjs/common';
import { ProductosDto } from '../../dto/productos.dto/productos.dto';

@Injectable()
export class ProductosService {
    public productos: ProductosDto[] = [];

    create(productos: ProductosDto):ProductosDto {
        this.productos.push(productos);
        return productos;
    }

    findAll(): ProductosDto[] {
        return this.productos
    }
}
