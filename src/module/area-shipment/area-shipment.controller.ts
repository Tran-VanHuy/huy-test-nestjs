import { Controller, VERSION_NEUTRAL } from "@nestjs/common";
import { AreaShipmentService } from "./area-shipment.service";

@Controller({
    version: VERSION_NEUTRAL,
    path: "api/area-shipment"
})
export class AreaShipmentController {

    constructor(private readonly areaShipmentService: AreaShipmentService) {

    }
}