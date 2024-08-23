import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductTypeEntity } from "./product-type.entity";

@Module({

    imports: [TypeOrmModule.forFeature([ProductTypeEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class ProductTypeModule { }