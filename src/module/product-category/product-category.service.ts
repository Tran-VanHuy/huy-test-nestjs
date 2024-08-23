import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductCategoryEntity } from "./product-category.entity";
import { Repository } from "typeorm";
import { Response } from "src/common/response";
import { ProductCategoryDto } from "./dto/product-category.dto";

@Injectable()
export class ProductCateogryService {

    constructor(@InjectRepository(ProductCategoryEntity) private productCategoryRepository: Repository<ProductCategoryEntity>) { }

    async getAll(currentPagem: number, rowsPerPage: number, type: number) {

        try {

            let find = {};

            if (type) {

                find = {
                    product_type: type
                }
            }

            const [res, total] = await this.productCategoryRepository.findAndCount({
                where: find,
                skip: (currentPagem - 1) * rowsPerPage,
                take: rowsPerPage
            })

            return Response(200, res, total)
        } catch (error) {

            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async create(body: ProductCategoryDto) {

        try {

            const res = await this.productCategoryRepository.save(body)
            return Response(200, res)
        } catch (error) {

            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}