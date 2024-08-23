import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SalesEntity } from "../sale/sale.entity";

const tableName = "shipments"

@Entity({ name: tableName })
export class ShipmentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sale_id: string;

    @Column()
    delivery_date: Date;

    @Column()
    delivery_time: number;

    @Column()
    delivery_tel: string;

    @Column()
    customer_address_id: number;

    @Column()
    delivery_name: string;

    @Column()
    delivery_zip: string;

    @Column()
    delivery_address1: string;

    @Column()
    delivery_address2: string;

    @Column()
    delivery_address3: string;

    @Column()
    shipping_note: string;

    @Column()
    customer_memo: string;

    @Column()
    status: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @OneToOne(() => SalesEntity, (item) => item.shipment)
    sale: SalesEntity;
}