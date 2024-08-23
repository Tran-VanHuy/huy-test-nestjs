import { Injectable } from "@nestjs/common";
import { PaymentHistoryEntity } from "./payment-history.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PaymentHistoryService {

    constructor(@InjectRepository(PaymentHistoryEntity) private paymentHistoryRepository: Repository<PaymentHistoryEntity>) {

    }
}