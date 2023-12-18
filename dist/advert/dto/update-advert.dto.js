"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdvertDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_advert_dto_1 = require("./create-advert.dto");
class UpdateAdvertDto extends (0, mapped_types_1.PartialType)(create_advert_dto_1.CreateAdvertDto) {
}
exports.UpdateAdvertDto = UpdateAdvertDto;
//# sourceMappingURL=update-advert.dto.js.map