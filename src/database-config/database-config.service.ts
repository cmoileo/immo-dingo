import { Injectable } from '@nestjs/common';

import { faker } from "@faker-js/faker";
import { AdvertService } from '../advert/advert.service';
import { UserService } from '../user/user.service';

@Injectable()
export class DatabaseConfigService {
  constructor(
    private readonly advertService: AdvertService,
    private readonly userService: UserService,
  ) {}

  randomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async createFixturesUser() {
    const users = [];
    for (let i = 0; i < 100; i++) { 
      const user = await this.userService.create({
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.firstName(),
      });
      users.push(user);
    }
    return users;
  }

  async createFixturesAdvert() {
    const users = await this.createFixturesUser();

    for (let i = 0; i < 100; i++) {
      const randomUser = users[this.randomNum(0, users.length - 1)];
      
      await this.advertService.create({
        title: "",
        price: this.randomNum(200, 5000),
        nb_rooms: this.randomNum(1, 10),
        square_meters: this.randomNum(9, 120),
        description: faker.lorem.paragraph(3),
        phoneNumber: faker.phone.number(),
        user: randomUser,
      });
    }
    return 'Adverts created';
  }
}
