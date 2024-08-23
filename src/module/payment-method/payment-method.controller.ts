import { Controller, VERSION_NEUTRAL } from "@nestjs/common";
import { PaymentMethodService } from "./payment-method.service";

@Controller({

    version: VERSION_NEUTRAL,
    path: "api/payment-method"
})

export class PaymentMethodController {

    constructor(private readonly paymentMethodService: PaymentMethodService) {

    }
}