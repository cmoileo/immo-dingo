"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 8000;
    app.setGlobalPrefix('api', {
        exclude: [{ path: '/', method: common_1.RequestMethod.GET }]
    });
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map