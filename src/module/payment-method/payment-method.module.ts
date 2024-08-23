import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentMethodEntity } from "./payment-method.entity";
import { PaymentMethodController } from "./payment-method.controller";
import { PaymentMethodService } from "./payment-method.service";

@Module({

    imports: [TypeOrmModule.forFeature([PaymentMethodEntity])],
    controllers: [PaymentMethodController],
    providers: [PaymentMethodService],
    exports: [TypeOrmModule]
})

export class PaymentMethodModule { }