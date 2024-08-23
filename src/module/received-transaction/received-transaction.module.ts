import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReceivedTransactionEntity } from "./received-transaction.entity";

@Module({

    imports: [TypeOrmModule.forFeature([ReceivedTransactionEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class ReceivedTransactionModule { }