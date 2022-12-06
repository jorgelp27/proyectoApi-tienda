import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductoDto {
    

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
}


