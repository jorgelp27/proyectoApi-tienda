import { IsNumber, IsString, MaxLength } from "class-validator";

export class CategoriaDto {

    @IsNumber()
    id_categoria: number;

    @IsString()
    @MaxLength(30)
    nombre: string;

    
}
