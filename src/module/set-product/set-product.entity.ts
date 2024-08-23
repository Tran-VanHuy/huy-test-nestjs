import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "../product/product.entity";

const tableName = "sets_products"

@Entity({name: tableName})
export class SetProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    set_id: number;

    @OneToOne(() => ProductEntity, (item) => item.id)
    @JoinTable()
    setId: ProductEntity;

    @Column()
    product_id: string;

    @OneToOne(() => ProductEntity, (item) => item.id)
    @JoinTable()
    productId: ProductEntity;

    @Column()
    quantity: number;

    @Column()
    total: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;
}
