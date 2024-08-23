import { Controller, VERSION_NEUTRAL } from "@nestjs/common";
import { SaleService } from "./sale.service";

@Controller({

    version: VERSION_NEUTRAL,
    path: "api/sales"
})

export class SaleController {

    constructor(private readonly saleService: SaleService) { }
}