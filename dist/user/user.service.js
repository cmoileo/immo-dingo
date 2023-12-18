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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        try {
            const savedUser = await this.userRepository.save(createUserDto);
            return { "message": `User #${savedUser.id} created`, savedUser };
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll() {
        try {
            const users = await this.userRepository.createQueryBuilder("user")
                .leftJoinAndSelect("user.adverts", "advert")
                .getMany();
            return users;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findOne(id) {
        try {
            const query = await this.userRepository.createQueryBuilder("user")
                .leftJoinAndSelect("user.adverts", "advert")
                .where("user.id = :id", { id });
            const user = query.getOne();
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    update(id, updateUserDto) {
        try {
            const updatedUser = this.userRepository.save({
                email: updateUserDto.email,
                password: updateUserDto.password
            });
            return `User #${id} updated`;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    remove(id) {
        try {
            const deleted = this.userRepository.delete(id);
            return `User #${id} deleted`;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map