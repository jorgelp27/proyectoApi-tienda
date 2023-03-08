import { Cesta } from "src/modulos/cesta/entities/cesta.entity";
import { Cliente } from "src/modulos/clientes/entities/cliente.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text',{
        unique: true
    })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('text',{
        nullable: true
    })
    facebook?: string;

    @Column('text',{
        nullable: true
    })
    github?: string;

    @Column('text')
    fullName: string;

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @Column('bool', { default: true })
    isActive: boolean;


    //Relacion

    @OneToOne(
        () => Cliente,
        (cliente) => cliente.user
    )
    @JoinColumn()
    cliente?: Cliente

    //Relacion con cesta

    @OneToOne(
        (type) => Cesta,
        (cesta) => cesta.user,
        { cascade: false }
    )
    cesta?: Cesta;

    //Trigers

    // @BeforeInsert()
    // checkGithub(){
    //     if (!this.github.includes('https://github.com/')){
    //         this.github = `https://github.com/${this.github}`
    //     }
    // }

}
