import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MasterCustomerEntity } from "../master-customers/master-customers.entity";

const tableName = "category_customer"
@Entity({name: tableName})
export class CategoryCustomerEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_id: string;

    @Column()
    master_customer_id: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @ManyToOne(() => MasterCustomerEntity, (item) => item.categoryCustomer)
    masterCustomer: MasterCustomerEntity;
}