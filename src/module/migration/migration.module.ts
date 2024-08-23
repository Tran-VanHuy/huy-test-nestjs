import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MigrationEntity } from "./migration.entity";

@Module({

    imports: [TypeOrmModule.forFeature([MigrationEntity])],
    controllers: [],
    providers: [],
    exports: []
})

export class MigrationModule { }