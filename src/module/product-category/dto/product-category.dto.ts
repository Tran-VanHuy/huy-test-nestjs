import { ApiProperty } from "@nestjs/swagger";

export class ProductCategoryDto {

    @ApiProperty({type: String, required: true})
    name: string;

    @ApiProperty({type: String, required: true})
    product_text: string;

    @ApiProperty({type: Number, required: true})
    product_type: number;
}