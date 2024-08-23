import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChangeTypesEntity } from "./change-types.entity";

@Module({

    imports: [TypeOrmModule.forFeature([ChangeTypesEntity])],
    controllers: [],
    providers: [],
    exports: []
})

export class ChangeTypesModule {}