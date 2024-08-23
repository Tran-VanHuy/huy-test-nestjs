import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { holidayEntity } from "./holiday.entity";
import { Repository } from "typeorm";

@Injectable()
export class HolidayService {

    constructor(@InjectRepository(holidayEntity) private holidayRepository: Repository<holidayEntity>) {

    }
}