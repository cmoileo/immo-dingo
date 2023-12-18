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
exports.DatabaseConfigService = void 0;
const common_1 = require("@nestjs/common");
const advert_service_1 = require("../advert/advert.service");
const user_service_1 = require("../user/user.service");
const faker_1 = require("@faker-js/faker");
let DatabaseConfigService = class DatabaseConfigService {
    constructor(advertService, userService) {
        this.advertService = advertService;
        this.userService = userService;
    }
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async createFixturesUser() {
        const users = [];
        for (let i = 0; i < 100; i++) {
            const user = await this.userService.create({
                email: faker_1.faker.internet.email(),
                password: faker_1.faker.internet.password(),
            });
            users.push(user);
        }
        return users;
    }
    async createFixturesAdvert() {
        const users = await this.createFixturesUser();
        for (let i = 0; i < 100; i++) {
            const randomUser = users[this.randomNum(0, users.length - 1)];
            await this.advertService.create({
                title: "",
                price: this.randomNum(200, 5000),
                nb_rooms: this.randomNum(1, 10),
                square_meters: this.randomNum(9, 120),
                description: faker_1.faker.lorem.paragraph(3),
                phoneNumber: faker_1.faker.phone.number(),
                user: randomUser,
            });
        }
        return 'Adverts created';
    }
};
exports.DatabaseConfigService = DatabaseConfigService;
exports.DatabaseConfigService = DatabaseConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [advert_service_1.AdvertService,
        user_service_1.UserService])
], DatabaseConfigService);
//# sourceMappingURL=database-config.service.js.map