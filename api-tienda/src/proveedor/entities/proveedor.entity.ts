import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedor')
export class proveedorEntity {

    @PrimaryGeneratedColumn("uuid")
    dni: string;

    @Column('text',{
        unique: true
    })
    nombre: string;

    @Column('text',{
        nullable: true
    })
    email: string;

    @Column('numeric',{
        nullable: true
    })
    telefono: number;

    constructor(dni: string, nombre: string, email: string, telefono:number) {
        this.dni = dni;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        console.log('Creo proveedor Entity para ' + this.nombre);
    }

}
