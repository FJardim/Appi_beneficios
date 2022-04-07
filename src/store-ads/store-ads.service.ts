import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { StoreAd } from './entities/store-ad.entity';

@Injectable()
export class StoreAdsService {

    constructor(@InjectRepository(StoreAd) private readonly storeAdsRepository: Repository<StoreAd>) {}
    
    async getAll(): Promise<StoreAd[]> {
        const storeAds = await this.storeAdsRepository.createQueryBuilder('storeAd')
            .innerJoinAndSelect('storeAd.store', 'store')
            .getMany()
        
        // const storeAds = await this.storeAdsRepository.find({relations: ['store']})

        return storeAds;
    }
}
