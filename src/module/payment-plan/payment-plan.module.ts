import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentPlanEntity } from "./payment-plan.entity";

@Module({

    imports: [TypeOrmModule.forFeature([PaymentPlanEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class PaymentPlanModule { }