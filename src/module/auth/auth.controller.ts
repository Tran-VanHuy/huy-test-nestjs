import { Body, Controller, Get, Post, Request, UseGuards, VERSION_NEUTRAL } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { AuthGuard } from "src/auth/auth.guard";

@ApiTags("Auth")
@Controller({

    version: VERSION_NEUTRAL,
    path: "api/auth"
})

export class AuthController {

    constructor(private readonly authService: AuthService) { }
    @Post("login")
    login(@Body() body: AuthLoginDto) {

        return this.authService.login(body)
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}