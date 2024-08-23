import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SaleProductEntity } from "./sale-product.entity";

@Module({

    imports: [TypeOrmModule.forFeature([SaleProductEntity])],
    controllers: [],
    providers: [],
    exports: []
})

export class SaleProductModule { }