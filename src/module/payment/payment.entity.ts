import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CustomersEntity } from "../customers/customers.entity";
import { SalesEntity } from "../sale/sale.entity";
import { PaymentMethodEntity } from "../payment-method/payment-method.entity";

const tableName = "payments"
@Entity({ name: tableName })

export class PaymentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    newest_sale_id: string;

    @Column()
    customer_id: string;

    @Column()
    sub_total: number;

    @Column()
    fee: number;

    @Column()
    total: number;

    @Column()
    deposit: number;

    @Column()
    payment_type: string;

    @Column()
    payment_limit: Date;

    @Column()
    remaining: number;

    @Column()
    payment_plan_number: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @OneToOne(() => CustomersEntity, (item) => item.id)
    @JoinTable()
    customer: CustomersEntity;

    @OneToOne(() => SalesEntity, (item) => item.payment)
    sale: SalesEntity;

    @ManyToOne(() => PaymentMethodEntity, (item) => item.payment)
    paymentMethod: PaymentMethodEntity;
}