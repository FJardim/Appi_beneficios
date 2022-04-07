import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'product'
})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'name',
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'slug',
    })
    Slug: string;

    @Column({
        type: 'varchar',
        name: 'descripion',
    })
    Descripion: string;

 
}
