import { Controller, Get } from '@nestjs/common';
import { MainBannerAd } from './entities/main-banner-ad.entity';
import { MainBannerAdsService } from './main-banner-ads.service';

@Controller('main-banner-ads')
export class MainBannerAdsController {
    constructor(private readonly MainBannerAdsService: MainBannerAdsService) {}
    
    @Get()
    async getAll(): Promise<MainBannerAd[]> {
        return await this.MainBannerAdsService.getAll();
    }


}
