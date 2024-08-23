import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CompanyInfosEntity } from "./company-infos.entity";
import { Repository } from "typeorm";

@Injectable()
export class CompanyInfosService {

    constructor(@InjectRepository(CompanyInfosEntity) private companyInfosRepository: Repository<CompanyInfosEntity>) { }
}