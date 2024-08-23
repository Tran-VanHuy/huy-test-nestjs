import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChangeTypesEntity } from "./change-types.entity";

@Injectable()
export class ChangeTypesService {

    constructor(@InjectRepository(ChangeTypesEntity) private changeTypesRepository: Repository<ChangeTypesEntity>) { }

}