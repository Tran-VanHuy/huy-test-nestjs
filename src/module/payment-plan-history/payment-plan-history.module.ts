import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentPlanHistoryEntity } from "./payment-plan-history.entity";

@Module({

    imports: [TypeOrmModule.forFeature([PaymentPlanHistoryEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class PaymentPlanHistoryModule { }