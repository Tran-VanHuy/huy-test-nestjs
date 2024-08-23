import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductCategoryEntity } from "../product-category/product-category.entity";
import { SaleProductEntity } from "../sale-product/sale-product.entity";
import { ProductSetEntity } from "../product-set/product-set.entity";

const tableName = "products"

@Entity({name: tableName})
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    kana: string;

    @Column({nullable: true})
    sizename: string;

    @Column({nullable: true})
    unit: string;

    @Column({nullable: true})
    jancode: string;

    @Column({nullable: true})
    category: string;

    @OneToOne(() => ProductCategoryEntity, (item) => item.id)
    product_category: ProductCategoryEntity;

    @Column({nullable: true})
    type1: string;

    @ManyToOne(() => ProductCategoryEntity, (item) => item.type1)
    product_type1: ProductCategoryEntity;

    @Column({nullable: true})
    type2: string;

    @ManyToOne(() => ProductCategoryEntity, (item) => item.type2)
    product_type2: ProductCategoryEntity;

    @Column({nullable: true})
    type3: string;

    @ManyToOne(() => ProductCategoryEntity, (item) => item.type3)
    product_type3: ProductCategoryEntity;

    @Column({nullable: true})
    type4: string;

    @ManyToOne(() => ProductCategoryEntity, (item) => item.type4)
    product_type4: ProductCategoryEntity;

    @Column({nullable: true})
    type5: string;

    @ManyToOne(() => ProductCategoryEntity, (item) => item.type5)
    product_type5: ProductCategoryEntity;

    @Column({nullable: true})
    stockctrl: number;

    @Column({nullable: true})
    taxtype: number;

    @Column({nullable: true})
    tax: number;

    @Column({nullable: true})
    unitprice: number;

    @Column({nullable: true})
    unitcost: number;

    @Column({nullable: true})
    cycle: number;

    @Column({nullable: true})
    is_disabled: number;

    @Column({nullable: true})
    print_name: string;

    @Column({nullable: true})
    correct_amount: number;

    @Column({nullable: true})
    short_name: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @OneToOne(() => SaleProductEntity, (item) => item.product)
    saleProduct: SaleProductEntity;

    @DeleteDateColumn()
    deleted: Date;

    @ManyToMany(() => ProductSetEntity, (item) => item.products)
    productSet: ProductSetEntity[];
}