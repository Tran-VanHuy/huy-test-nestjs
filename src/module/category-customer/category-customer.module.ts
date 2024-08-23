import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryCustomerEntity } from "./category-customer.entity";
import { MasterCustomerEntity } from "../master-customers/master-customers.entity";

@Module({

    imports: [TypeOrmModule.forFeature([CategoryCustomerEntity, MasterCustomerEntity])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})

export class CategoryCustomerModule { }