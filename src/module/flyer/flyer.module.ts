import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FlyerEntity } from "./flyer.entity";
import { FlyerControlelr } from "./flyer.controller";
import { FlyerService } from "./flyer.service";

@Module({

    imports: [TypeOrmModule.forFeature([FlyerEntity])],
    controllers: [FlyerControlelr],
    providers: [FlyerService],
    exports: [TypeOrmModule]
})

export class FlyerModule { }