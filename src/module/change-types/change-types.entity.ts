import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

const tableName = "change_types"

@Entity({name: tableName})
export class ChangeTypesEntity {

    @Column()
    tabletype: number;

    @Column()
    lcode: string;

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}