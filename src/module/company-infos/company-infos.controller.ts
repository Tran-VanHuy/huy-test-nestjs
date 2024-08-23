import { Controller } from "@nestjs/common";
import { VERSION_METADATA } from "@nestjs/common/constants";
import { CompanyInfosService } from "./company-infos.service";

@Controller({

    version: VERSION_METADATA,
    path: "api/company-infos"
})

export class CompanyInfosController {

    constructor(private readonly companyInfosSerice: CompanyInfosService) { }
}