import { Controller, Post, } from '@nestjs/common';
import { DatabaseConfigService } from './database-config.service';

@Controller('/fixtures')
export class DatabaseConfigController {
  constructor(private readonly databaseConfigService: DatabaseConfigService) {}

  @Post('/adverts')
  createFixturesAdvert() {
    return this.databaseConfigService.createFixturesAdvert();
  } 
}
