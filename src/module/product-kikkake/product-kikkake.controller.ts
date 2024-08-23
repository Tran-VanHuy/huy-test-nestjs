import { Controller, Get, VERSION_NEUTRAL } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductKikkakeService } from "./product-kikkake.service";

@ApiTags("Product Kikkake")
@Controller({

    version: VERSION_NEUTRAL,
    path: "api/product-kikkake"
})

export class ProductKikkakeController {

    constructor(private readonly productKikkakeService: ProductKikkakeService) { }

    @Get("get-code")
    getCode() {

        return this.productKikkakeService.getCode()
    }
}