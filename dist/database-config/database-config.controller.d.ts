import { DatabaseConfigService } from './database-config.service';
export declare class DatabaseConfigController {
    private readonly databaseConfigService;
    constructor(databaseConfigService: DatabaseConfigService);
    createFixturesAdvert(): Promise<string>;
}
