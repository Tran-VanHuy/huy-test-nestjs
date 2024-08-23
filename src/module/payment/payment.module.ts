import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentEntity } from "./payment.entity";

@Module({

    imports: [TypeOrmModule.forFeature([PaymentEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class PaymentModule { }