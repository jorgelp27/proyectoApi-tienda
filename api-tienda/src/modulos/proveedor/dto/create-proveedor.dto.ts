import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateProveedorDto {
    
    @IsString()
    @MaxLength(9)
    dni: number;

    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsEmail()
    @MaxLength(30)
    email: string;

    @IsNumber()
    telefono: number;
}
