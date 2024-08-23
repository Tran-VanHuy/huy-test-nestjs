import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SetProductEntity } from "./set-product.entity";

@Module({

    imports: [TypeOrmModule.forFeature([SetProductEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class SetProductModule { }