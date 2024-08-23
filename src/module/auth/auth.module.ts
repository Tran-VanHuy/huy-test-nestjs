import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberEntity } from "../member/member.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "src/auth/constants";

@Module({
    imports: [
        TypeOrmModule.forFeature([MemberEntity]),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [TypeOrmModule]
})

export class AuthModule { }