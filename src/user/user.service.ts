import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}
  
  async create(createUserDto: CreateUserDto) {
    try {
      const savedUser = await this.userRepository.save(createUserDto)
      return {"message": `User #${savedUser.id} created`, savedUser}
    } catch (error) {
      throw new Error(error)
    }
  }

  async findAll(query: string, order_by?: 'name' | 'created_at', order?: 'ASC' | 'DESC', per_page?: number, page?: number) {
    try {
      const queryBuilder = this.userRepository.createQueryBuilder("user")
        .leftJoinAndSelect("user.adverts", "advert")
        .where("user.name LIKE :query", { query: `%${query}%` })
        .orderBy(`user.${order_by}`, order)
        .skip((page - 1) * per_page)
        .take(per_page);

      const users = await queryBuilder.getMany();

      return users;
    } catch (error) {
      throw new Error(error)
    }
  }

  async findOne(id: number) {
    try {
      const query = await this.userRepository.createQueryBuilder("user")
      .leftJoinAndSelect("user.adverts", "advert")
      .where("user.id = :id", { id })

      const user = query.getOne()
      
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = this.userRepository.save({
        email: updateUserDto.email,
        password: updateUserDto.password
      })
      return `User #${id} updated`
    } catch (error) {
      throw new Error(error)
    }
  }

  remove(id: number) {
    try {
      const deleted = this.userRepository.delete(id)
      return `User #${id} deleted`
    } catch (error) {
      throw new Error(error)
    }
  }
}
