import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { AdvertEntity } from './entities/advert.entity';
import { Repository } from 'typeorm';
import { QueriesAdvertDto } from './dto/queries-adevrt.dto';
export declare class AdvertService {
    private advertRepository;
    constructor(advertRepository: Repository<AdvertEntity>);
    create(createAdvertDto: CreateAdvertDto): Promise<AdvertEntity>;
    findAll(queries: QueriesAdvertDto): Promise<{
        data: AdvertEntity[];
        count: number;
        per_page: number;
        page: number;
        last_page: number;
    }>;
    findOne(id: number): Promise<AdvertEntity>;
    update(id: number, updateAdvertDto: UpdateAdvertDto): Promise<string>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
