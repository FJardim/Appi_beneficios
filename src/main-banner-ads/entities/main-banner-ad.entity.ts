import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "src/store/entities/store.entity";
@Entity({
    name: 'main_banner_ads'
})
export class MainBannerAd {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'url',
    })
    url: string;
    
    @Column({
        type: 'datetime',
        name: 'from',
    })
    from: string;

    @Column({
        type: 'datetime',
        name: 'util',
    })
    until: string;

    @Column({
        type: 'int',
        name: 'priority',
    })
    priority: number;

    @Column({
        type: 'varchar',
        name: 'img_path',
    })
    imgPath: string;

}