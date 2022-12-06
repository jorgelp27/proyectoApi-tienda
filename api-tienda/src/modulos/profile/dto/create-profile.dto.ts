import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProfileDto {
    

    @IsString()
    @MaxLength(30)
    email: string;

    @IsString()
    @MaxLength(30)
    facebook: string;

    @IsString()
    @MaxLength(30)
    github: string;

    // @IsString()
    // @MinLength(1)
    // idCliente:string;

}
