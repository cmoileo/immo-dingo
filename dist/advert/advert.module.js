"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertModule = void 0;
const common_1 = require("@nestjs/common");
const advert_service_1 = require("./advert.service");
const advert_controller_1 = require("./advert.controller");
const advert_entity_1 = require("./entities/advert.entity");
const typeorm_1 = require("@nestjs/typeorm");
let AdvertModule = class AdvertModule {
};
exports.AdvertModule = AdvertModule;
exports.AdvertModule = AdvertModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([advert_entity_1.AdvertEntity])
        ],
        controllers: [advert_controller_1.AdvertController],
        providers: [advert_service_1.AdvertService],
        exports: [advert_service_1.AdvertService]
    })
], AdvertModule);
//# sourceMappingURL=advert.module.js.map