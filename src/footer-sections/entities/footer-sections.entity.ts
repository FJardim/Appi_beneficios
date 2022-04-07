import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'footer_sections'
})
export class FooterSection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'name',
    })
    name: string;

}