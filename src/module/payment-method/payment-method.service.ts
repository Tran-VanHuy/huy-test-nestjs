import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentMethodEntity } from "./payment-method.entity";
import { Repository } from "typeorm";

@Injectable()
export class PaymentMethodService {

    constructor(@InjectRepository(PaymentMethodEntity) paymentMethodRepository: Repository<PaymentMethodEntity>) {

    }
}