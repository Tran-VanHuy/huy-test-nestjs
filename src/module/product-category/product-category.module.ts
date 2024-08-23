import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductCategoryEntity } from "./product-category.entity";
import { ProductCategoryController } from "./product-category.controller";
import { ProductCateogryService } from "./product-category.service";

@Module({

    imports: [TypeOrmModule.forFeature([ProductCategoryEntity])],
    controllers: [ProductCategoryController],
    providers: [ProductCateogryService],
    exports: [TypeOrmModule]
})

export class ProductCategoryModule { }