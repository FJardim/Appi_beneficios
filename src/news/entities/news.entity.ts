import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "src/store/entities/store.entity";

@Entity({
    name: 'news'
})
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'title',
    })
    title: string;

    @Column({
        type: 'varchar',
        name: 'img_path',
    })
    imgPath: string;

    
    @ManyToOne(() => Store, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'store_id' })
    store: Store;
}