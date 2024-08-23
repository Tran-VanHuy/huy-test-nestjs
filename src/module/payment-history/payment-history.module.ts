import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentHistoryEntity } from "./payment-history.entity";
import { PaymentHistoryController } from "./payment-history.controller";
import { PaymentHistoryService } from "./payment-history.service";

@Module({

    imports: [TypeOrmModule.forFeature([PaymentHistoryEntity])],
    controllers: [PaymentHistoryController],
    providers: [PaymentHistoryService],
    exports: [TypeOrmModule]
})

export class PaymentHistoryModule { }