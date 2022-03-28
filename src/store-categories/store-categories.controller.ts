import { Controller, Get } from '@nestjs/common';
import { StoreCategory } from './entities/store-category.entity';
import { StoreCategoriesService } from './store-categories.service';

@Controller('store-categories')
export class StoreCategoriesController {
    constructor(private readonly storeCategoriesService: StoreCategoriesService) {}
    
    @Get()
    async getAll(): Promise<StoreCategory[]> {
        return await this.storeCategoriesService.getAll();
    }
}
