import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductoDto {

    @IsString()
    @MaxLength(9)
    id: string;
    
    @IsString()
    @MaxLength(50)
    modelo: string;

    @IsNumber()
    precio: number;

    @IsString()
    @MaxLength(30)
    fabricante: string;

    @IsString()
    @MaxLength(70)
    descripcion: string;

    @IsString()
    idCliente?: string;

    @IsString()
    idCategoria?: string;

    @IsString()
    idProveedor?: string;


}


