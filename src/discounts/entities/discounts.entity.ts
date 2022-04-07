import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'discounts'
})
export class Discounts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'name',
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'descripion',
    })
    Descripion: string;

    @Column({
        type: 'varchar',
        name: 'value',
    })
    value: string;
   
    @Column({
        type: 'varchar',
        name: 'img_path',
    })
    imgPath: string;

    @Column({
        type: 'datetime',
        name: 'from',
    })
    from: string;

    @Column({
        type: 'datetime',
        name: 'util',
    })
    util: string;
}

   