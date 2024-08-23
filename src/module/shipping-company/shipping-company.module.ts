import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShippingCompanyEntity } from "./shipping-company.entity";

@Module({

    imports: [TypeOrmModule.forFeature([ShippingCompanyEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class ShippingCompanyModule { }