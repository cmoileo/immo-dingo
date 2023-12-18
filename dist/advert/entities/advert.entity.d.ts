import { CommonEntity } from "src/commun/commun.entity";
import { UserEntity } from "src/user/entities/user.entity";
export declare class AdvertEntity extends CommonEntity {
    id: number;
    title: string;
    price: number;
    nb_rooms: number;
    square_meters: number;
    phoneNumber: string;
    description: string;
    user: UserEntity;
}
