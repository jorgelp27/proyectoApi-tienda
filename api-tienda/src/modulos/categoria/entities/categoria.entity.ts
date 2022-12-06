import { Producto } from "src/modulos/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoria')
export class Categoria {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text',{
        unique: true
    })
    nombre: string;

    //Relacion
    
    @OneToMany(
        () => Producto,
        (Producto) => Producto.categoria,
        { cascade: false }
    )
    
    productos?: Producto[];
}
