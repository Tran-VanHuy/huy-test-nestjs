import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShipmentEntity } from "./shipment.entity";

@Module({

    imports: [TypeOrmModule.forFeature([ShipmentEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class ShipmentModule { }