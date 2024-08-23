import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export const tableName = "area_shipments";

@Entity({ name: tableName })
export class AreaShipmentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    area_id: number;

    @Column()
    name: string;
    @Column()

    @Column()
    days: number;

    @Column()
    amount: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
