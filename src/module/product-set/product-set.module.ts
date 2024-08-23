import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductSetEntity } from "./product-set.entity";

@Module({

    imports: [TypeOrmModule.forFeature([ProductSetEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class ProductSetModule { }