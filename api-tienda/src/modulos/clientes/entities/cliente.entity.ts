import { profile } from "console";
import { type } from "os";
import { Producto } from "src/modulos/productos/entities/producto.entity";
import { Profile } from "src/modulos/profile/entities/profile.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {

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

    @Column('text',{
        nullable: true
    })
    ciudad: string;

    @Column('numeric',{
        nullable: true
    })
    telefono: number;

    //Relaciones

    @OneToOne(
        (type) => Profile,
        (profile) => profile.cliente,
        { cascade:false }
    )
    profile?: Profile;


    @OneToMany(
        () => Producto,
        (Producto) => Producto.cliente,
        { cascade: false, eager: false  }

    )
    productos?: Producto[];

}
