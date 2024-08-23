import { ApiProperty } from "@nestjs/swagger"

export class AuthLoginDto {

    @ApiProperty({type: String, required: true})
    password: string
    
    @ApiProperty({type: String, required: true})
    staffcode: string
}