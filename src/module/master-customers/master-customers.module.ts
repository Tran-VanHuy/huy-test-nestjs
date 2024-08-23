import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MasterCustomerEntity } from "./master-customers.entity";
import { CategoryCustomerEntity } from "../category-customer/category-customer.entity";

@Module({

    imports: [TypeOrmModule.forFeature([CategoryCustomerEntity, MasterCustomerEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class MasterCustomerModule { }