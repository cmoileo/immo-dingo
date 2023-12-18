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
exports.AdvertService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const advert_entity_1 = require("./entities/advert.entity");
const typeorm_2 = require("typeorm");
let AdvertService = class AdvertService {
    constructor(advertRepository) {
        this.advertRepository = advertRepository;
    }
    async create(createAdvertDto) {
        try {
            const createdAdvert = await this.advertRepository.create(createAdvertDto);
            const result = await this.advertRepository.save(createdAdvert);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(queries) {
        const { min_price, max_price, min_nb_rooms, max_nb_rooms, min_square_meters, max_square_meters, order = 'DESC', order_by = 'price', per_page = 10, page = 1 } = queries;
        try {
            const query = await this.advertRepository.createQueryBuilder('advert');
            min_price && query.andWhere('advert.price >= :min_price', { min_price });
            max_price && query.andWhere('advert.price <= :max_price', { max_price });
            min_nb_rooms && query.andWhere('advert.nb_rooms >= :min_nb_rooms', { min_nb_rooms });
            max_nb_rooms && query.andWhere('advert.nb_rooms <= :max_nb_rooms', { max_nb_rooms });
            min_square_meters && query.andWhere('advert.square_meters >= :min_square_meters', { min_square_meters });
            max_square_meters && query.andWhere('advert.square_meters <= :max_square_meters', { max_square_meters });
            query.orderBy(`advert.${order_by}`, order);
            query.limit(per_page);
            query.offset((page - 1) * per_page);
            const [data, count] = await query.getManyAndCount();
            return {
                data,
                count,
                per_page,
                page,
                last_page: Math.ceil(count / per_page)
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const advert = await this.advertRepository.findOneBy({ id: id });
            if (!advert) {
                throw new Error(`Advert with ID ${id} not found`);
            }
            return advert;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateAdvertDto) {
        const advert = await this.findOne(id);
        try {
            const updatedAdvert = this.advertRepository.update(id, updateAdvertDto);
            return `Advert #${id} updated`;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async remove(id) {
        this.findOne(id);
        try {
            return this.advertRepository.softDelete(id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.AdvertService = AdvertService;
exports.AdvertService = AdvertService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(advert_entity_1.AdvertEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdvertService);
//# sourceMappingURL=advert.service.js.map