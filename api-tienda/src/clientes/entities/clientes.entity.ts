import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class clientesEntity {

    @PrimaryGeneratedColumn("uuid")
    dni: string;

    @Column('text',{
        unique: true
    })
    nombre: string;

    @Column('numeric',{
        nullable: true
    })
    email: string;

    @Column('text',{
        nullable: true
    })
    ciudad: string;

    @Column('text',{
        nullable: true
    })
    telefono: number;

    constructor(dni: string, nombre: string, email: string, ciudad:string, telefono:number) {
        this.dni = dni;
        this.nombre = nombre;
        this.email = email;
        this.ciudad = ciudad;
        this.telefono = telefono;
        console.log('Creo proveedor Entity para ' + this.nombre);
    }

}
