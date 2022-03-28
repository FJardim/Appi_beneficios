import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StoreCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'name',
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'img_path',
    })
    imgPath: string;
}