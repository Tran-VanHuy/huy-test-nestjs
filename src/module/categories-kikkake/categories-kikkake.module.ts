import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CateogoryKikkakeEntity } from "./categories-kikkake.entity";
import { CategoryKikkakeController } from "./categories-kikkake.controller";
import { CateogryKikkakeService } from "./categories-kikkake.service";

@Module({

    imports: [TypeOrmModule.forFeature([CateogoryKikkakeEntity])],
    controllers: [CategoryKikkakeController],
    providers: [CateogryKikkakeService],
    exports: [TypeOrmModule]
})

export class CategoryKikkakeModule { }