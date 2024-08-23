import { Controller, VERSION_NEUTRAL } from "@nestjs/common";
import { CustomersService } from "./customers.service";

@Controller({

    version: VERSION_NEUTRAL,
    path: "api/customers"
})

export class CustomersController {

    constructor(private readonly customersService: CustomersService) {

    }
}