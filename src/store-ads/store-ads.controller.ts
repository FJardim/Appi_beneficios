import { Controller, Get } from '@nestjs/common';
import { StoreAdsService } from './store-ads.service';
import { StoreAd } from './entities/store-ad.entity';

@Controller('store-ads')
export class StoreAdsController {
    constructor(private readonly storeAdsService: StoreAdsService) {}
    
    @Get()
    async getAll(): Promise<StoreAd[]> {
        return await this.storeAdsService.getAll();
    }
}


