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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigController = void 0;
const common_1 = require("@nestjs/common");
const database_config_service_1 = require("./database-config.service");
let DatabaseConfigController = class DatabaseConfigController {
    constructor(databaseConfigService) {
        this.databaseConfigService = databaseConfigService;
    }
    createFixturesAdvert() {
        return this.databaseConfigService.createFixturesAdvert();
    }
};
exports.DatabaseConfigController = DatabaseConfigController;
__decorate([
    (0, common_1.Post)('/adverts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatabaseConfigController.prototype, "createFixturesAdvert", null);
exports.DatabaseConfigController = DatabaseConfigController = __decorate([
    (0, common_1.Controller)('/fixtures'),
    __metadata("design:paramtypes", [database_config_service_1.DatabaseConfigService])
], DatabaseConfigController);
//# sourceMappingURL=database-config.controller.js.map