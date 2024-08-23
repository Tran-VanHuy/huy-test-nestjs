import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductKikkakeEntity } from "./product-kikkake.entity";

@Module({

    imports: [TypeOrmModule.forFeature([ProductKikkakeEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class ProductKikkakeModule { }