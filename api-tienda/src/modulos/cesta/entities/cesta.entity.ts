import { Producto } from "src/modulos/productos/entities/producto.entity";
import { Profile } from "src/modulos/profile/entities/profile.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cestas')
export class Cesta {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('numeric',{
        unique: true
    })
    cantidad: number;

    @Column('text',{
        unique: true
    })
    fecha: string;

    //Relacion

    @ManyToOne(
        () => Producto,
        (producto) => producto.cesta,
        { cascade: false }
    )
    producto?: Producto

    //Ralacion con profile

    @OneToOne(
        () => Profile,
        (profile) => profile.cesta
    )
    @JoinColumn()
    profile?: Profile

    
}


