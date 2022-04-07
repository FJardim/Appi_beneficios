import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'app_section'
})

export class AppSection{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'title',
    })
    title: string;
    
    @Column({
        type: 'varchar',
        name: 'title_color',
    })
    title_color: string;

    @Column({
        type: 'varchar',
        name: 'background_color',
    })
    background_color: string;

    @Column({
        type: 'varchar',
        name: 'description',
    })
    description: string;

    @Column({
        type: 'varchar',
        name: 'description_color',
    })
    description_color: string;

    @Column({
        type: 'varchar',
        name: 'leftside_image',
    })
    leftside_image: string;

    @Column({
        type: 'varchar',
        name: 'rightside_image',
    })
    rightside_image: string;
}
