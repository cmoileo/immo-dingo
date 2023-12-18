import { AdvertService } from './advert.service';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { QueriesAdvertDto } from './dto/queries-adevrt.dto';
export declare class AdvertController {
    private readonly advertService;
    constructor(advertService: AdvertService);
    create(createAdvertDto: CreateAdvertDto): Promise<import("./entities/advert.entity").AdvertEntity>;
    findAll(queries: QueriesAdvertDto): Promise<{
        data: import("./entities/advert.entity").AdvertEntity[];
        count: number;
        per_page: number;
        page: number;
        last_page: number;
    }>;
    findOne(id: string): Promise<import("./entities/advert.entity").AdvertEntity>;
    update(id: string, updateAdvertDto: UpdateAdvertDto): Promise<string>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
