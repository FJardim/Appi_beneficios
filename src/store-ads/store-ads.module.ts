import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreAdsService } from './store-ads.service';
import { StoreAdsController } from './store-ads.controller';
import { StoreAd } from './entities/store-ad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreAd])], 
  providers: [StoreAdsService],
  controllers: [StoreAdsController]
})
export class StoreAdsModule {}


