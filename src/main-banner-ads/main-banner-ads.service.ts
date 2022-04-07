import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { MainBannerAd } from './entities/main-banner-ad.entity';

@Injectable()
export class MainBannerAdsService {
    constructor(@InjectRepository(MainBannerAd) private readonly mainBannerAdsRepository: Repository<MainBannerAd>) {}
    
    async getAll(): Promise<MainBannerAd[]> {
        const mainBannerAds = await this.mainBannerAdsRepository.createQueryBuilder('mainBannerAds')
            .innerJoinAndSelect('mainBannerAds.store', 'store')
            .getMany()
            
            return mainBannerAds;
    }
}
  


