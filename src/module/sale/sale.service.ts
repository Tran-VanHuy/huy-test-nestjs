import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SalesEntity } from "./sale.entity";
import { Repository } from "typeorm";

@Injectable()
export class SaleService {

    constructor(@InjectRepository(SalesEntity) private saleRepository: Repository<SalesEntity>) {
    }
}