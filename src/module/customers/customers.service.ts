import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CustomersEntity } from "./customers.entity";

@Injectable()
export class CustomersService {

    constructor(@InjectRepository(CustomersEntity) private customersRepository: Repository<CustomersEntity>) {}
}