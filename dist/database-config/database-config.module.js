"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigModule = void 0;
const common_1 = require("@nestjs/common");
const database_config_service_1 = require("./database-config.service");
const database_config_controller_1 = require("./database-config.controller");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const advert_module_1 = require("../advert/advert.module");
const user_module_1 = require("../user/user.module");
let DatabaseConfigModule = class DatabaseConfigModule {
};
exports.DatabaseConfigModule = DatabaseConfigModule;
exports.DatabaseConfigModule = DatabaseConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            advert_module_1.AdvertModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: "nest-recap",
                synchronize: false,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                schema: 'public',
            })
        ],
        controllers: [
            process.env.NODE_ENV == 'development' && database_config_controller_1.DatabaseConfigController,
        ],
        providers: [database_config_service_1.DatabaseConfigService],
    })
], DatabaseConfigModule);
//# sourceMappingURL=database-config.module.js.map