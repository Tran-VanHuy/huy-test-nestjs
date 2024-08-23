import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AreaShipmentEntity } from "./area-shipment.entity";
import { Repository } from "typeorm";

@Injectable()
export class AreaShipmentService {

    constructor(@InjectRepository(AreaShipmentEntity) private areaShipmentRepository: Repository<AreaShipmentEntity>) {
        
    }
}