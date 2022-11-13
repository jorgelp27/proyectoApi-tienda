import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class ClientesDto {

    @IsString()
    @MaxLength(9)
    dni: number;

    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsEmail()
    @MaxLength(30)
    email: string;

    @IsString()
    @MaxLength(30)
    ciudad: string;

    @IsNumber()
    telefono: number;

}
