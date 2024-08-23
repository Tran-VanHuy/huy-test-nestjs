import { Controller, VERSION_NEUTRAL } from "@nestjs/common";
import { PaymentHistoryService } from "./payment-history.service";

@Controller({

    version: VERSION_NEUTRAL,
    path: "api/payment-history"
})

export class PaymentHistoryController {

    constructor (private readonly paymentHistoryService: PaymentHistoryService) {

        
    }
}