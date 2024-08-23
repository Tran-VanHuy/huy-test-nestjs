import { ApiHideProperty, ApiProperty } from "@nestjs/swagger"

export class MemberDto {

    @ApiProperty({ required: true })
    staffCode: string

    @ApiHideProperty()
    staffcode: string

    @ApiProperty({ required: true })
    name: string

    @ApiProperty({ required: true })
    kana: string

    @ApiProperty()
    note: string

    @ApiProperty({ required: true })
    startDate: string

    @ApiProperty()
    endDate: string

    @ApiProperty({ required: true })
    disabled: number

    @ApiProperty({ required: true })
    password: string

    @ApiProperty({ required: true })
    authority: number

    @ApiProperty({ required: true })
    confirmPassword: string

}