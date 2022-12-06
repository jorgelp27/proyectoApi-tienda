import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCategoriaDto {

    @IsString()
    @MaxLength(30)
    nombre: string;
}
