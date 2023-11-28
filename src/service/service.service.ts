import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
  private services = []; 

  create(createServiceDto: CreateServiceDto) {
    this.services.push(createServiceDto);
    return createServiceDto;
  }

  findAll() {
    return this.services;
  }

  findOne(id: number) {
    const service = this.services.find(service => service.id === id);
    if (!service) {
      throw new Error(`Service with ID ${id} not found`);
    }
    return service;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    const serviceIndex = this.services.findIndex(service => service.id === id);
    if (serviceIndex === -1) {
      throw new Error(`Service with ID ${id} not found`);
    }
    this.services[serviceIndex] = { ...this.services[serviceIndex], ...updateServiceDto };
    return this.services[serviceIndex];
  }

  remove(id: number) {
    const serviceIndex = this.services.findIndex(service => service.id === id);
    if (serviceIndex === -1) {
      throw new Error(`Service with ID ${id} not found`);
    }
    this.services.splice(serviceIndex, 1);
    return { message: `Service with ID ${id} has been removed` };
  }
}