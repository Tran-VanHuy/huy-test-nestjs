import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "../product/product.entity";

const tableName = "product_category"

@Entity({name: tableName})
export class ProductCategoryEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToMany(() => ProductEntity, (item) => item.product_type1)
    type1: ProductEntity[];

    @OneToMany(() => ProductEntity, (item) => item.product_type2)
    type2: ProductEntity[];

    @OneToMany(() => ProductEntity, (item) => item.product_type3)
    type3: ProductEntity[];

    @OneToMany(() => ProductEntity, (item) => item.product_type4)
    type4: ProductEntity[];

    @OneToMany(() => ProductEntity, (item) => item.product_type5)
    type5: ProductEntity[];

    @OneToOne(() => ProductEntity, (item) => item.product_category)
    category: ProductEntity;

    @Column()
    name: string;

    @Column()
    product_text: string;

    @Column()
    product_type: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;
}