import { AdvertEntity } from "src/advert/entities/advert.entity";
import { CommonEntity } from "src/commun/commun.entity";
export declare class UserEntity extends CommonEntity {
    id: number;
    email: string;
    password: string;
    adverts: AdvertEntity[];
}
