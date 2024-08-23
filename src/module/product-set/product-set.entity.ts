import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "../product/product.entity";

const tableName = "product_sets"
@Entity({ name: tableName })

export class ProductSetEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    sub_total: number;

    @Column()
    tax: number;

    @Column()
    discount: number;

    @Column()
    total_set: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @ManyToMany(() => ProductEntity, (item) => item.productSet)
    products: ProductEntity[];
}