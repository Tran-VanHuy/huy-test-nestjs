import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm"
import { CustomersEntity } from "../customers/customers.entity";

const tableName = "members"

@Entity({ name: tableName })
export class MemberEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ unique: true })
    staffcode: string;

    @Column({ nullable: true })
    kana: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    note: string;

    @Column({ nullable: true })
    startdate: Date;

    @Column({ nullable: true })
    disabled: number;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    authority: number;

    @Column({ nullable: true })
    branchcode: string;

    @Column({ nullable: true })
    teamcode: string;

    @Column({ nullable: true })
    enddate: Date;

    @Column({ nullable: true })
    reset_password_token: string;

    @Column({ nullable: true })
    token_expiration: Date;

    @Column({ nullable: true })
    used_token: boolean;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @DeleteDateColumn()
    deleted: Date;

    @OneToOne(() => CustomersEntity, (item) => item.staff)
    staff: CustomersEntity;
}