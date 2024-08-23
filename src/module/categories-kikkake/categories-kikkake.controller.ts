import { Controller } from "@nestjs/common";
import { VERSION_METADATA } from "@nestjs/common/constants";
import { CateogryKikkakeService } from "./categories-kikkake.service";

@Controller({

    version: VERSION_METADATA,
    path: "api/categories_kikkake"
})
export class CategoryKikkakeController {

    constructor(private readonly categoryKikkakeController: CateogryKikkakeService) { }
}