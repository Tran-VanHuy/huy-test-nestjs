import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ReceivedTransactionEntity } from "../received-transaction/received-transaction.entity";
import { SalesEntity } from "../sale/sale.entity";

const tableName = "payment-plans"

@Entity({name: tableName})
export class PaymentPlanEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => ReceivedTransactionEntity, (item) => item.id)
    @JoinTable()
    transaction: ReceivedTransactionEntity;

    @Column()
    newest_sale_id: string;

    @Column()
    customer_id: string;

    @Column()
    payment_number: number;

    @Column()
    payment_date: Date;

    @Column()
    payment_amount: number;

    @Column()
    remaining: number;

    @Column()
    status: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @ManyToOne(() => SalesEntity, (item) => item.paymentPlan)
    sale: SalesEntity;
}