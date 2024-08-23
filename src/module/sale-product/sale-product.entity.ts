import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SalesEntity } from "../sale/sale.entity";
import { ProductEntity } from "../product/product.entity";

const tableName = "sale_products"

@Entity({name: tableName})
export class SaleProductEntity {

    @PrimaryGeneratedColumn()
    sale_id: string;

    @Column()
    sort: number;

    @Column()
    type: number;

    @Column()
    product_id: string;

    @Column()
    amount: number;

    @Column()
    unit: string;

    @Column()
    unit_price: number;

    @Column()
    unit_cost: number;

    @Column()
    subtotal: number;

    @Column()
    subctotal: number;

    @Column()
    subbenef: number;

    @Column()
    subtax: number;

    @Column()
    shipment_amount: number;

    @CreateDateColumn()
    created: number;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @ManyToMany(() => SalesEntity, (item) => item.saleProducts)
    sale: SalesEntity;

    @OneToOne(() => ProductEntity, (item) => item.saleProduct)
    product: ProductEntity;
}