import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductCategoryEntity } from "../product-category/product-category.entity";

@Module({

    imports: [TypeOrmModule.forFeature([ProductEntity, ProductCategoryEntity])],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [TypeOrmModule]
})

export class ProductModule { }