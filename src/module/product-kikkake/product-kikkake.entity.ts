import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

const tableName = "products_kikkake";

@Entity({name: tableName})
export class ProductKikkakeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;
}