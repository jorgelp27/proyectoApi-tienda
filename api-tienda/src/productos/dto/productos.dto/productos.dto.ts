import { IsNumber, IsString, MaxLength } from "class-validator";

export class ProductosDto {

    @IsNumber()
    @MaxLength(9)
    id: number;

    @IsString()
    @MaxLength(50)
    modelo: string;

    @IsNumber()
    @MaxLength(30)
    precio: number;

    @IsString()
    @MaxLength(30)
    fabricante: string;

    @IsString()
    @MaxLength(70)
    descripcion: string;

}


