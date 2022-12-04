import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cestas')
export class Cesta {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column('numeric',{
        unique: true
    })
    cantidad: number;

    @Column('text',{
        unique: true
    })
    fecha: string;
}
