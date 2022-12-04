import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCategoriaDto {
    @IsNumber()
    id: number;

    @IsString()
    @MaxLength(30)
    nombre: string;
}
