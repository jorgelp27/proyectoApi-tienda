import { Producto } from "src/modulos/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedor')
export class Proveedor {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text',{
        unique: true
    })
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



    //Relacion con productos

    @OneToMany(
        () => Producto,
        (Producto) => Producto.proveedor,
        { cascade: false }
    )

    productos?: Producto[];

}
