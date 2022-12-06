import { Cliente } from "src/modulos/clientes/entities/cliente.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Profiles')

export class Profile {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text',{
        unique: true
    })
    email: string;

    @Column('text')
    password?: string;

    @Column('text',{
        unique: true
    })
    facebook: string;

    @Column('text',{
        nullable: true
    })
    github: string;


    //Relacion

    @OneToOne(
        () => Cliente,
        (cliente) => cliente.profile
    )
    @JoinColumn()
    cliente?: Cliente

}
