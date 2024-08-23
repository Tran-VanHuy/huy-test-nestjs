import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SalesEntity } from "../sale/sale.entity";
import { PaymentMethodEntity } from "../payment-method/payment-method.entity";

const tableName = "payment_histories"

@Entity({name: tableName})
export class PaymentHistoryEntity {

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
    remaining: number;

    @Column()
    payment_plan_number: number;

    @Column()
    payment_type: string;

    @Column()
    payment_limit: Date;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @OneToOne(() => SalesEntity, (item) => item.paymentHistories)
    sale: SalesEntity;

    @ManyToOne(() => PaymentMethodEntity, (item) => item.paymentHistory)
    paymentMethod: PaymentMethodEntity;
}