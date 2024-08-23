import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FlyerEntity } from "./flyer.entity";
import { Repository } from "typeorm";

@Injectable()
export class FlyerService {

    constructor(@InjectRepository(FlyerEntity) private flyerRepository: Repository<FlyerEntity>) {

    }
}