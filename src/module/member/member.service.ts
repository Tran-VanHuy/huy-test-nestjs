import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MemberEntity } from "./member.entity";
import { Repository } from "typeorm";
import { MemberDto } from "./dto/member.dto";
import * as bcrypt from 'bcrypt';
import { Response } from "src/common/response";

@Injectable()
export class MemberSerivce {

    constructor(@InjectRepository(MemberEntity) private memberRepository: Repository<MemberEntity>) {

    }

    async hashPassword(password: string) {

        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash
    }

    async onModuleInit() {

            const res = await this.memberRepository.find();
            
            if (res.length === 0) {
                const hash = await this.hashPassword(process.env.PASSWORD || "samapi")
                const body =
                {
                    "name": "Admin one",
                    "email": "admin@gmail.com",
                    "disabled": 0,
                    "authority": 3,
                    "staffcode": "00001",
                    "password": hash
                }
                await this.memberRepository.save(body)
            }
    }

    async create(body: MemberDto) {

        try {

            if (body.password === body.confirmPassword) {

                const hash = await this.hashPassword(body.password)
                const newBody: MemberDto = {
                    ...body,
                    password: hash,
                    staffcode: body.staffCode
                }

                await this.memberRepository.save(newBody)
                return Response(200, null)
            } else {

                throw new HttpException("password and confirmPassword not match", HttpStatus.BAD_REQUEST)
            }

        } catch (error) {

            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async autoId() {

        try {

            const res = await this.memberRepository.find({
                take: 1,
                order: {
                    staffcode: "DESC"
                }
            })

            const staffCode = res && res.length > 0 ? res[0].staffcode : "00001";
            const number = parseInt(staffCode) + 1
            let result = number.toString().padStart(staffCode.length, '0');

            return Response(200, {
                autoId: result
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}