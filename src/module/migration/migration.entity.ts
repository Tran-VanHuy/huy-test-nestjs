import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm"

const tableName = "migrations"

@Entity({name: tableName})
export class MigrationEntity {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    timestamp: Date

    @Column()
    name: string
}