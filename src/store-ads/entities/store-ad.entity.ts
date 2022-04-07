import { Store } from "src/store/entities/store.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'store_ads'
})
export class StoreAd {
    @PrimaryGeneratedColumn ()
    id: number;

    @Column({
        type: 'decimal',
        precision: 14,
        scale: 2,
        name: 'price',
    })
    price: string;

    @Column({
        type: 'int',
        name: 'priority',
    })
    priority: number;

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

    @ManyToOne(() => Store, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'store_id' })
    store: Store;
}
