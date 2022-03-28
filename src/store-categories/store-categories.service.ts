import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreCategory } from './entities/store-category.entity';

@Injectable()
export class StoreCategoriesService {
    constructor(@InjectRepository(StoreCategory) private readonly storeCategoriesRepository: Repository<StoreCategory>) {}
    
    async getAll(): Promise<StoreCategory[]> {
        const storeCategories = await this.storeCategoriesRepository.find();

        return storeCategories;
    }
}
