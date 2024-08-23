import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SalesEntity } from "../sale/sale.entity";

const tableName = "received_transactions"

@Entity({ name: tableName })
export class ReceivedTransactionEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    newest_sale_id: string;

    @Column()
    customer_id: string;

    @Column()
    payment_plan_id: number;

    @Column()
    payment_number: number;

    @Column()
    payment_date: Date;

    @Column()
    payment_amount: number;

    @Column()
    payment_type: string;

    @Column()
    remaining: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @ManyToOne(() => SalesEntity, (item) => item.receives)
    sale: SalesEntity;
}
