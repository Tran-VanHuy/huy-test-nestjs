import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

const tableName = "holidays"

@Entity({name: tableName})
export class holidayEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: number;

    @Column()
    month_day: string;

    @Column()
    fulldate: Date;

    @Column()
    name: string;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: Date;
}