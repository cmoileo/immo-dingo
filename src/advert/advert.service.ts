import { Injectable } from '@nestjs/common';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdvertEntity } from './entities/advert.entity';
import { Repository } from 'typeorm';
import { QueriesAdvertDto } from './dto/queries-adevrt.dto';

@Injectable()
export class AdvertService {
  constructor(
    @InjectRepository(AdvertEntity)
    private advertRepository: Repository<AdvertEntity>
  ) {}

  async create(createAdvertDto: CreateAdvertDto) {
    try {
      const createdAdvert = await this.advertRepository.create(createAdvertDto);
      const result = await this.advertRepository.save(createdAdvert);
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  async findAll(queries: QueriesAdvertDto) {
    const { 
      min_price, max_price, min_nb_rooms, max_nb_rooms, min_square_meters, max_square_meters, 
      order = 'DESC', 
      order_by = 'price', 
      per_page = 10, 
      userName,
      page = 1 } = queries;
    try {
      const query = await this.advertRepository.createQueryBuilder('advert')
        .leftJoinAndSelect('advert.user', 'user')
        .where('user.name = :userName', { userName });

      min_price && query.andWhere('advert.price >= :min_price', { min_price })
      max_price && query.andWhere('advert.price <= :max_price', { max_price })
      min_nb_rooms && query.andWhere('advert.nb_rooms >= :min_nb_rooms', { min_nb_rooms })
      max_nb_rooms && query.andWhere('advert.nb_rooms <= :max_nb_rooms', { max_nb_rooms })
      min_square_meters && query.andWhere('advert.square_meters >= :min_square_meters', { min_square_meters })
      max_square_meters && query.andWhere('advert.square_meters <= :max_square_meters', { max_square_meters })
      
      query.orderBy(`advert.${order_by}`, order)

      query.limit(per_page)
      query.offset((page - 1) * per_page)

      const [data, count] = await query.getManyAndCount()

      return {
        data,
        count,
        per_page,
        page,
        last_page: Math.ceil(count / per_page)
      };
    } catch (error) {
      throw error;
    }
  }
  
  async findOne(id: number) {
    try {
      const advert = await this.advertRepository.findOneBy({id: id});
      if (!advert) {
        throw new Error(`Advert with ID ${id} not found`);
      }
      return advert;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateAdvertDto: UpdateAdvertDto) {
    const advert = await this.findOne(id)
    try {
      const updatedAdvert = this.advertRepository.update(id, updateAdvertDto)
      return `Advert #${id} updated`
    } catch (error) {
      throw new Error(error)
    }
  }

  async remove(id: number) {
    this.findOne(id)
    try {
      return this.advertRepository.softDelete(id)
    } catch (error) {
      throw new Error(error)
    }
  }
}
