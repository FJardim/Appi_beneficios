import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'stores'
})
export class Store {
    @PrimaryGeneratedColumn ()
    id: number;

    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: string;

    @Column({
        type: 'varchar',
        name: 'slug',
    })
    slug: string;

    @Column({
        type: 'varchar',
        name: 'phoneNumber',
    })
    phoneNumber: string;

    @Column({
        type: 'varchar',
        name: 'address',
    })
    address: string;

    @Column({
        type: 'decimal',
        name: 'latitude',
    })
    latitude: number;

    @Column({
        type: 'int',
        name: 'longitude',
    })
    longitude: number;
}