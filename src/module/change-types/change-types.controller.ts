import { Controller } from "@nestjs/common";
import { VERSION_METADATA } from "@nestjs/common/constants";
import { ChangeTypesService } from "./change-types.service";

@Controller({


    version: VERSION_METADATA,
    path: "api/change-types"
})
export class ChangeTypesController {

    constructor(private readonly changeTypesService: ChangeTypesService) {

    }
}