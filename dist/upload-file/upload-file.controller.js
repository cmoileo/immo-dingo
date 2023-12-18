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
exports.UploadFileController = void 0;
const common_1 = require("@nestjs/common");
const upload_file_service_1 = require("./upload-file.service");
const create_upload_file_dto_1 = require("./dto/create-upload-file.dto");
const update_upload_file_dto_1 = require("./dto/update-upload-file.dto");
let UploadFileController = class UploadFileController {
    constructor(uploadFileService) {
        this.uploadFileService = uploadFileService;
    }
    create(createUploadFileDto) {
        return this.uploadFileService.create(createUploadFileDto);
    }
    findAll() {
        return this.uploadFileService.findAll();
    }
    findOne(id) {
        return this.uploadFileService.findOne(+id);
    }
    update(id, updateUploadFileDto) {
        return this.uploadFileService.update(+id, updateUploadFileDto);
    }
    remove(id) {
        return this.uploadFileService.remove(+id);
    }
};
exports.UploadFileController = UploadFileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_upload_file_dto_1.CreateUploadFileDto]),
    __metadata("design:returntype", void 0)
], UploadFileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UploadFileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UploadFileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_upload_file_dto_1.UpdateUploadFileDto]),
    __metadata("design:returntype", void 0)
], UploadFileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UploadFileController.prototype, "remove", null);
exports.UploadFileController = UploadFileController = __decorate([
    (0, common_1.Controller)('upload-file'),
    __metadata("design:paramtypes", [upload_file_service_1.UploadFileService])
], UploadFileController);
//# sourceMappingURL=upload-file.controller.js.map