import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoria')
export class categoriaEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column('text',{
        unique: true
    })
    nombre: string;

    

    constructor(id: number, nombre: string, ) {
        this.id = id;
        this.nombre = nombre;
        console.log('Creo proveedor Entity para ' + this.nombre);
    }

}
