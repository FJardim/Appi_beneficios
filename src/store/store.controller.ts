import { Controller, Get } from '@nestjs/common';
import { StoreService } from './store.service';
import { Store } from './entities/store.entity';

@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService) {}
    
    @Get()
    async getAll(): Promise<Store[]> {  
        return await this.storeService.getAll();
    }
}
