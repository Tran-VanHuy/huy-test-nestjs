import { Module } from "@nestjs/common";
import { SalesEntity } from "./sale.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SaleController } from "./sale.controller";
import { SaleService } from "./sale.service";

@Module({

    imports: [TypeOrmModule.forFeature([SalesEntity])],
    controllers: [SaleController],
    providers: [SaleService],
    exports: [TypeOrmModule]
})

export class SaleModule { }