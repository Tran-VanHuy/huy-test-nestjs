import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { holidayEntity } from "./holiday.entity";
import { HolidayController } from "./holiday.controller";
import { HolidayService } from "./holiday.service";

@Module({

    imports: [TypeOrmModule.forFeature([holidayEntity])],
    controllers: [HolidayController],
    providers: [HolidayService],
    exports: [TypeOrmModule]
})

export class HolidayModule { }