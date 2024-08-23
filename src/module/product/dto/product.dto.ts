import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { ProductCategoryDto } from "src/module/product-category/dto/product-category.dto";
import { ProductCategoryEntity } from "src/module/product-category/product-category.entity";

export class ProductDto {

    @ApiProperty({required: false})
    name: string;

    @ApiProperty({required: false})
    kana: string;

    @ApiProperty({required: false})
    sizename: string;

    @ApiProperty({required: false})
    unit: string;

    @ApiProperty({required: false})
    jancode: string;

    @ApiProperty({required: false})
    category: string;

    @ApiHideProperty()
    product_category: ProductCategoryDto;

    @ApiProperty({required: false})
    type1: string;

    @ApiHideProperty()
    product_type1: ProductCategoryEntity;

    @ApiProperty({required: false})
    type2: string;

    @ApiHideProperty()
    product_type2: ProductCategoryEntity;

    @ApiProperty({required: false})
    type3: string;

    @ApiHideProperty()
    product_type3: ProductCategoryEntity;

    @ApiProperty({required: false})
    type4: string;

    @ApiHideProperty()
    product_type4: ProductCategoryEntity;

    @ApiProperty({required: false})
    type5: string;

    @ApiHideProperty()
    product_type5: ProductCategoryEntity;

    @ApiProperty({required: false})
    stockctrl: number;

    @ApiProperty({required: false})
    taxtype: number;

    @ApiProperty({required: false})
    tax: number;

    @ApiProperty({required: false})
    unitprice: number;

    @ApiProperty({required: false})
    unitcost: number;

    @ApiProperty({required: false})
    cycle: number;

    @ApiProperty({required: false})
    is_disabled: number;

    @ApiProperty({required: false})
    print_name: string;

    @ApiProperty({required: false})
    correct_amount: number;

    @ApiProperty({required: false})
    short_name: string;


    // @OneToOne(() => SaleProductEntity, (item) => item.product)
    // saleProduct: SaleProductEntity;

    // @DeleteDateApiProperty({required: false})
    // deleted: Date;

    // @ManyToMany(() => ProductSetEntity, (item) => item.products)
    // productSet: ProductSetEntity[];
}