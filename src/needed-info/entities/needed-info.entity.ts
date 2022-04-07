import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'needed_info'
})

export class NeededInfo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'left_section_description',
    })
    left_section_description: string;

    @Column({
        type: 'varchar',
        name: ' left_section_image',
    })
    left_section_image: string;

    @Column({
        type: 'varchar',
        name: 'left_section_title',
    })
    left_section_title: string;

    @Column({
        type: 'varchar',
        name: 'middle_section_description',
    })
    middle_section_description: string;

    @Column({
        type: 'varchar',
        name: 'middle_section_image',
    })
    middle_section_image: string;

    @Column({
        type: 'varchar',
        name: 'middle_section_title',
    })
    middle_section_title: string;

    @Column({
        type: 'varchar',
        name: 'right_section_description',
    })
    right_section_description: string;

    @Column({
        type: 'varchar',
        name: 'right_section_image',
    })
    right_section_image: string;
    
    @Column({
        type: 'varchar',
        name: 'right_section_title',
    })
    right_section_title: string;

}
