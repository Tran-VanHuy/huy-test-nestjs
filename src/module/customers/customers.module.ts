import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomersEntity } from "./customers.entity";
import { CustomersController } from "./customers.controller";
import { CustomersService } from "./customers.service";

@Module({

    imports: [TypeOrmModule.forFeature([CustomersEntity])],
    controllers: [CustomersController],
    providers: [CustomersService],
    exports: [TypeOrmModule]
})

export class CustomerModule { }