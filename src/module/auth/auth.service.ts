import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { MemberEntity } from "../member/member.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthLoginDto } from "./dto/auth-login.dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { Response } from "src/common/response";

@Injectable()
export class AuthService {

    constructor(@InjectRepository(MemberEntity) private memberRepository: Repository<MemberEntity>,
        private jwtService: JwtService) {

    }

    async login(body: AuthLoginDto) {

        try {

            const findStaffCode = await this.memberRepository.findOneBy({ staffcode: body.staffcode })
            if (findStaffCode) {

                const isMatch = await bcrypt.compare(body.password, findStaffCode.password);

                if (isMatch) {

                    const data = {
                        id: findStaffCode.id,
                        name: findStaffCode.name,
                        kana: findStaffCode.kana,
                        email: findStaffCode.email,
                        note: findStaffCode.note,
                        startdate: findStaffCode.startdate,
                        disabled: findStaffCode.disabled,
                        authority: findStaffCode.authority,
                        branchcode: findStaffCode.branchcode,
                        teamcode: findStaffCode.teamcode,
                        enddate: findStaffCode.enddate,
                        created: findStaffCode.created,
                        updated: findStaffCode.updated,
                        staffcode: findStaffCode.staffcode
                    }

                    const access_token = await this.jwtService.signAsync(data)
                    await this.memberRepository.update(findStaffCode.id, {used_token: true})
                    return Response(200, { access_token })
                } else {

                    throw new UnauthorizedException("password and staffcode not match.");
                }
            }
        } catch (error) {

            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}