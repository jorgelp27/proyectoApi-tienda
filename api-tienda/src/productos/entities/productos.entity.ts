import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class productoEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column('text',{
        unique: true
    })
    modelo: string;

    @Column('numeric',{
        nullable: true
    })
    precio: number;

    @Column('text',{
        nullable: true
    })
    fabricante: string;

    @Column('text',{
        nullable: true
    })
    descripcion: string;

    constructor(id: number, modelo: string, precio: number, fabricante:string, descripcion:string) {
        this.id = id;
        this.modelo = modelo;
        this.precio = precio;
        this.fabricante = fabricante;
        this.descripcion = descripcion;
        console.log('Creo proveedor Entity para ' + this.modelo);
    }

}
