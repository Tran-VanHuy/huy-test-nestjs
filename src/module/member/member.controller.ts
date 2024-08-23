import { Body, Controller, Get, Post, VERSION_NEUTRAL } from "@nestjs/common";
import { MemberSerivce } from "./member.service";
import { MemberDto } from "./dto/member.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Member")
@Controller({

    version: VERSION_NEUTRAL,
    path: "api/members"
})

export class MemberController {

    constructor(private readonly memberService: MemberSerivce) {

    }

    @Post("create")
    async create(@Body() body: MemberDto) {

        return this.memberService.create(body)
    }

    @Get("auto-id")
    async autoId() {

        return this.memberService.autoId()
    }
}