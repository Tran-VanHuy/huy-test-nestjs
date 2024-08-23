import { Controller, VERSION_NEUTRAL } from "@nestjs/common";
import { FlyerService } from "./flyer.service";

@Controller({

    version: VERSION_NEUTRAL,
    path: "api/flyer"
})

export class FlyerControlelr {

    constructor(private readonly flyerService: FlyerService) {

    }
}