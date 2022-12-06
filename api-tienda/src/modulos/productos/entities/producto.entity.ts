import { Categoria } from "src/modulos/categoria/entities/categoria.entity";
import { Cliente } from "src/modulos/clientes/entities/cliente.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn("uuid")
    id: string;

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


//Relacion
    @ManyToOne(
        () => Categoria,
        (categoria) => categoria.productos,
        { cascade: false }
    )
    categoria?: Categoria

    @ManyToOne(
        () => Cliente,
        (cliente) => cliente.productos,
        { cascade: false }
    )
    cliente?: Cliente

}
