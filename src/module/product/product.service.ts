import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./dto/product.dto";
import { Response } from "src/common/response";
import { ProductCategoryEntity } from "../product-category/product-category.entity";

@Injectable()
export class ProductService {

    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
        @InjectRepository(ProductCategoryEntity) private productCategoryRepository: Repository<ProductCategoryEntity>) { }

    async get() {

        try {

            const [res, total] = await this.productRepository.findAndCount()

            return Response(200, res, total)
        } catch (error) {

            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async create(body: ProductDto) {

        try {
            const promises: Promise<ProductCategoryEntity | null>[] = [];

            if (body.type1) {
                promises.push(this.productCategoryRepository.findOneBy({ id: body.type1, product_type: 1 }));
            } else {
                promises.push(Promise.resolve(null));
            }

            if (body.type2) {
                promises.push(this.productCategoryRepository.findOneBy({ id: body.type2, product_type: 2 }));
            } else {
                promises.push(Promise.resolve(null));
            }

            if (body.type3) {
                promises.push(this.productCategoryRepository.findOneBy({ id: body.type3, product_type: 3 }));
            } else {
                promises.push(Promise.resolve(null));
            }

            if (body.type4) {
                promises.push(this.productCategoryRepository.findOneBy({ id: body.type4, product_type: 4 }));
            } else {
                promises.push(Promise.resolve(null));
            }

            if (body.type5) {
                promises.push(this.productCategoryRepository.findOneBy({ id: body.type5, product_type: 5 }));
            } else {
                promises.push(Promise.resolve(null));
            }

            const [product_type1, product_type2, product_type3, product_type4, product_type5] = await Promise.all(promises);

            const newBody: ProductDto = {
                ...body,
                type1: product_type1?.id,
                type2: product_type2?.id,
                type3: product_type3?.id,
                type4: product_type4?.id,
                type5: product_type5?.id,
                product_type1,
                product_type2,
                product_type3,
                product_type4,
                product_type5
            };

            const res = await this.productRepository.save(newBody);
            return Response(200, null);
        } catch (error) {

            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}