import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'business_info'
})

export class BusinessInfo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'sectionTitle',
    })
    sectionTitle: string;
    
    @Column({
        type: 'varchar',
        name: 'leftSectionImage',

    })
    leftSectionImage: string;

    @Column({
        type: 'varchar',
        name: 'leftSectionTitle',
    })
    leftSectionTitle: string;

    @Column({
        type: 'varchar',
        name: 'leftSectionText',
    })
    leftSectionText: string;

    @Column({
        type: 'varchar',
        name: 'leftSectionBtnColor',
    })
    leftSectionBtnColor: string;

    @Column({
        type: 'varchar',
        name: 'leftSectionBtnText',
    })
    leftSectionBtnText: string;

    @Column({
        type: 'varchar',
        name: 'leftSectionBtnUrl',
    })
    leftSectionBtnUrl: string;

    @Column({
        type: 'varchar',
        name: 'rightSectionImage',
    })
    rightSectionImage: string;

    @Column({
        type: 'varchar',
        name: 'rightSectionTitle',
    })
    rightSectionTitle: string;

    @Column({
        type: 'varchar',
        name: 'rightSectionText',
    })
    rightSectionText: string;

    @Column({
        type: 'varchar',
        name: 'rightSectionBtnColor',
    })
    rightSectionBtnColor: string;

    @Column({
        type: 'varchar',
        name: 'rightSectionBtnText',
    })
    rightSectionBtnText: string;

    @Column({
        type: 'varchar',
        name: 'rightSectionBtnUrl',
    })
    rightSectionBtnUrl: string;

}
