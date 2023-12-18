"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertController = void 0;
const common_1 = require("@nestjs/common");
const advert_service_1 = require("./advert.service");
const create_advert_dto_1 = require("./dto/create-advert.dto");
const update_advert_dto_1 = require("./dto/update-advert.dto");
const queries_adevrt_dto_1 = require("./dto/queries-adevrt.dto");
let AdvertController = class AdvertController {
    constructor(advertService) {
        this.advertService = advertService;
    }
    create(createAdvertDto) {
        return this.advertService.create(createAdvertDto);
    }
    findAll(queries) {
        return this.advertService.findAll(queries);
    }
    findOne(id) {
        return this.advertService.findOne(+id);
    }
    update(id, updateAdvertDto) {
        return this.advertService.update(+id, updateAdvertDto);
    }
    remove(id) {
        return this.advertService.remove(+id);
    }
};
exports.AdvertController = AdvertController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_advert_dto_1.CreateAdvertDto]),
    __metadata("design:returntype", void 0)
], AdvertController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queries_adevrt_dto_1.QueriesAdvertDto]),
    __metadata("design:returntype", void 0)
], AdvertController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdvertController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_advert_dto_1.UpdateAdvertDto]),
    __metadata("design:returntype", void 0)
], AdvertController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdvertController.prototype, "remove", null);
exports.AdvertController = AdvertController = __decorate([
    (0, common_1.Controller)('adverts'),
    __metadata("design:paramtypes", [advert_service_1.AdvertService])
], AdvertController);
//# sourceMappingURL=advert.controller.js.map