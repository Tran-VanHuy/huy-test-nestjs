import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaShipmentEntity } from "./area-shipment.entity";
import { AreaShipmentService } from "./area-shipment.service";
import { AreaShipmentController } from "./area-shipment.controller";

@Module({

    imports: [TypeOrmModule.forFeature([AreaShipmentEntity])],
    controllers: [AreaShipmentController],
    providers: [AreaShipmentService],
    exports: [TypeOrmModule]
})

export class AreaShipmentModule { }