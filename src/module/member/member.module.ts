import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberEntity } from "./member.entity";
import { MemberController } from "./member.controller";
import { MemberSerivce } from "./member.service";

@Module({

    imports: [TypeOrmModule.forFeature([MemberEntity])],
    controllers: [MemberController],
    providers: [MemberSerivce],
    exports: [TypeOrmModule]
})

export class MemberModule { }