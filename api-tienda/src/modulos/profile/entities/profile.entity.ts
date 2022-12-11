import { Cesta } from "src/modulos/cesta/entities/cesta.entity";
import { Cliente } from "src/modulos/clientes/entities/cliente.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    //Relacion con cesta

    @OneToOne(
        (type) => Cesta,
        (cesta) => cesta.profile,
        { cascade: false }
    )
    cesta?: Cesta;

    @BeforeInsert()
    checkGithub(){
        if (!this.github.includes('https://github.com/')){
            this.github = `https://github.com/${this.github}`
        }
    }

}
