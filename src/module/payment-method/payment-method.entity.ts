import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PaymentHistoryEntity } from "../payment-history/payment-history.entity";
import { PaymentEntity } from "../payment/payment.entity";

const tableName = "payment_methods"

@Entity({name: tableName})
export class PaymentMethodEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @OneToMany(() => PaymentEntity, (item) => item.paymentMethod)
    payment: PaymentEntity[];

    @OneToMany(() => PaymentHistoryEntity, (item) => item.paymentMethod)
    paymentHistory: PaymentHistoryEntity[];
}