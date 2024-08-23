import { Controller, VERSION_NEUTRAL } from "@nestjs/common";
import { HolidayService } from "./holiday.service";

@Controller({

    version: VERSION_NEUTRAL,
    path: "api/holiday"
})

export class HolidayController {

    constructor(private readonly holidayService: HolidayService) { }
}