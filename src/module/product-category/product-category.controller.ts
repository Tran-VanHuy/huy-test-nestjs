import { Body, Controller, Get, Post, Query, VERSION_NEUTRAL } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { ProductCateogryService } from "./product-category.service";
import { ProductCategoryDto } from "./dto/product-category.dto";
import { Paging } from "src/common/paing";

@ApiTags("Product Category")
@Controller({

    version: VERSION_NEUTRAL,
    path: "api/product-category"
})
export class ProductCategoryController {

    constructor(private readonly productCategoryService: ProductCateogryService) { }

    @ApiQuery({name: "currentPage", type: Number, required: false})
    @ApiQuery({name: "rowsPerPage", type: Number, required: false})
    @ApiQuery({name: "type", type: Number, required: false})
    @Get("/list")
    getAll(@Query() {currentPage, rowsPerPage} : Paging, @Query("type") type: number) {

        return this.productCategoryService.getAll(currentPage || 1, rowsPerPage || 100, type)
    }

    @Post("/create")
    create(@Body() body: ProductCategoryDto) {

        return this.productCategoryService.create(body)
    }
}