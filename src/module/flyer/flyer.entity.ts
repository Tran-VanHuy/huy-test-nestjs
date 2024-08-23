import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

const tableName = "flyers"

@Entity({ name: tableName})
export class FlyerEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    note: string;

    @Column()
    repeatflg: number;

    @UpdateDateColumn()
    created: Date;

    @CreateDateColumn()
    updated: Date;
}