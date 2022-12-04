import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedor')
export class Proveedor {
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

    @Column('numeric',{
        nullable: true
    })
    telefono: number;
}
