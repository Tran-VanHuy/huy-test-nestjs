import { Injectable } from "@nestjs/common";
import { ProductKikkakeEntity } from "./product-kikkake.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "src/common/response";

@Injectable()
export class ProductKikkakeService {

    constructor(@InjectRepository(ProductKikkakeEntity) private productKikkakeRepository: Repository<ProductKikkakeEntity>) {

    }

    async getCode() {

        try {

            const res = await this.productKikkakeRepository.find({
                take: 1,
                order: {
                    id: "DESC"
                }
            })

            const code = res && res.length > 0 ? res[0].code : "0001"
            return Response(200, {code: code})
        } catch (error) {

        }
    }
}