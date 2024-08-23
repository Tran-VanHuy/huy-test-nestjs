import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CompanyInfosEntity } from "./company-infos.entity";
import { CompanyInfosController } from "./company-infos.controller";
import { CompanyInfosService } from "./company-infos.service";

@Module({

    imports: [TypeOrmModule.forFeature([CompanyInfosEntity])],
    controllers: [CompanyInfosController],
    providers: [CompanyInfosService],
    exports: [TypeOrmModule]
})

export class CompanyInfosModule { }