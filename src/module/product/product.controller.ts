import { Body, Controller, Get, Post, VERSION_NEUTRAL } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { ProductDto } from "./dto/product.dto";

@ApiTags("Product")
@Controller({

    version: VERSION_NEUTRAL,
    path: "api/product"
})
export class ProductController {

    constructor(private readonly productService: ProductService) {

    }

    @Get("/list")
    get() {

        return this.productService.get()
    }

    @Post("/create")
    create(@Body() body: ProductDto) {

        return this.productService.create(body)
    }
}