import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ReceivedTransactionEntity } from "../received-transaction/received-transaction.entity";

const tableName = "payment_plan_histories"

@Entity({name: tableName})
export class PaymentPlanHistoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    newest_sale_id: string;

    @OneToOne(() => ReceivedTransactionEntity, (item) => item.id)
    @JoinTable()
    transaction: ReceivedTransactionEntity;

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
}