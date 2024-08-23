import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CustomersEntity } from "../customers/customers.entity";
import { PaymentHistoryEntity } from "../payment-history/payment-history.entity";
import { ReceivedTransactionEntity } from "../received-transaction/received-transaction.entity";
import { PaymentPlanEntity } from "../payment-plan/payment-plan.entity";
import { PaymentEntity } from "../payment/payment.entity";
import { SaleProductEntity } from "../sale-product/sale-product.entity";
import { ShipmentEntity } from "../shipment/shipment.entity";
import { MemberEntity } from "../member/member.entity";

const tableName = "sales"
@Entity({name : tableName})
export class SalesEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    customer_id: string;

    @Column()
    customer_name: string;

    @Column()
    staff_id: string;

    @Column()
    shipping_date: Date;

    @Column()
    shipping_check: number;

    @Column()
    order_date: Date;

    @Column()
    shipping_confirm_staff_id: string;

    @Column()
    shipping_company_id: string;

    @Column()
    shipping_company_name: string;

    @Column()
    status: number;

    @Column()
    status_change_reason: string;

    @Column()
    shipping_origin_id: string;

    @Column()
    shipment_staff_id: string;

    @Column()
    sub_total: number;

    @Column()
    discount: number;

    @Column()
    shipping_fee: number;

    @Column()
    shipping_type: string;

    @Column()
    total: number;

    @Column()
    day_shipping: Date;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @OneToMany(() => SaleProductEntity, (item) => item.sale)
    saleProducts: SaleProductEntity[];

    @OneToOne(() => PaymentEntity, (item) => item.sale)
    payment: PaymentEntity;

    @OneToOne(() => PaymentHistoryEntity, (item) => item.sale)
    paymentHistories: PaymentHistoryEntity;

    @OneToMany(() => ReceivedTransactionEntity, (item) => item.sale)
    receives: ReceivedTransactionEntity[];

    @OneToMany(() => PaymentPlanEntity, (item) => item.sale)
    paymentPlan: PaymentPlanEntity[];

    @OneToOne(() => MemberEntity, (item) => item.id)
    @JoinTable()
    memberConfirmStaff: MemberEntity;

    @OneToOne(() => MemberEntity, (item) => item.id)
    @JoinTable()
    memberShipmentStaff: MemberEntity;

    @OneToOne(() => MemberEntity, (item) => item.id)
    @JoinTable()
    staff: MemberEntity;

    @OneToOne(() => ShipmentEntity, (item) => item.sale)
    shipment: ShipmentEntity;

    @ManyToOne(() => CustomersEntity, (item) => item.sale)
    customer: CustomersEntity;
}