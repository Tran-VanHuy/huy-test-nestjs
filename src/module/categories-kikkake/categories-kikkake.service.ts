import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CateogoryKikkakeEntity } from "./categories-kikkake.entity";
import { Repository } from "typeorm";

@Injectable()
export class CateogryKikkakeService {

    constructor(@InjectRepository(CateogoryKikkakeEntity) private categoryKikkakeRepository: Repository<CateogoryKikkakeEntity>) {

    }
}