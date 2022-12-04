import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {

    @PrimaryGeneratedColumn("uuid")
    id: number;

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

}
