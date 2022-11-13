import { Injectable } from '@nestjs/common';
import { ProveedorDto } from 'src/proveedor/dto/proveedor.dto/proveedor.dto';

@Injectable()
export class ProveedorService {

    public proveedor: ProveedorDto[] = [];

    create(productos: ProveedorDto):ProveedorDto {
        this.proveedor.push(productos);
        return productos;
    }

    findAll(): ProveedorDto[] {
        return this.proveedor
    }
}
