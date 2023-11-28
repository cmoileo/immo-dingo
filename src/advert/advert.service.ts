import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdvertEntity } from './entities/advert.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertService {
  constructor(
    @InjectRepository(AdvertEntity)
    private advertRepository: Repository<AdvertEntity>
  ) {}

  async create(createAdvertDto: CreateAdvertDto) {
  try {
    const createdAdvert = this.advertRepository.create(createAdvertDto)
    const result = this.advertRepository.save(createdAdvert)
    return result
  } catch (error) {
    throw new Error(error)
  }
  }

  async findAll() {
    try {
      const advertsList = await this.advertRepository.find()
      return advertsList
    } catch (error) {
      throw new Error(error)
    }
  }

  async findOne(id: number) {
    try {
      const advert = await this.advertRepository.findOneBy({id: id})

      if (!advert) return new HttpException('Advert not found', HttpStatus.NOT_FOUND)
      return advert
    } catch (error) {
      throw new Error(error)
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
    try {
      const deletedAdvert = await this.advertRepository.softRemove({id: id})
      return `Advert #${id} Deleted`
    } catch (error) {
      throw new Error(error)
    }
  }
}
