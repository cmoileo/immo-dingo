import { AdvertService } from 'src/advert/advert.service';
import { UserService } from 'src/user/user.service';
export declare class DatabaseConfigService {
    private readonly advertService;
    private readonly userService;
    constructor(advertService: AdvertService, userService: UserService);
    randomNum(min: number, max: number): number;
    createFixturesUser(): Promise<any[]>;
    createFixturesAdvert(): Promise<string>;
}
