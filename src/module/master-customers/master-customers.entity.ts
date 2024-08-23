import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryCustomerEntity } from "../category-customer/category-customer.entity";

const tableName = "master_customers"
@Entity({name: tableName})
export class MasterCustomerEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_code: string;

    @Column()
    parent_id: number;

    @Column()
    child_code: string;

    @Column()
    child_name: string;

    @Column()
    is_update: number;

    @Column()
    created: Date;

    @Column()
    updated: Date;

    @OneToMany(() => CategoryCustomerEntity, (item) => item.masterCustomer, { cascade: true })
    categoryCustomer: CategoryCustomerEntity[];
}