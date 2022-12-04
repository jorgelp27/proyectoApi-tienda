import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCestaDto {
    
    @IsNumber()
    id: number;

    @IsNumber()
    cantidad: number;

    @IsString()
    @MaxLength(30)
    fecha: string;
}
