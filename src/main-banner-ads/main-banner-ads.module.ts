import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainBannerAd } from './entities/main-banner-ad.entity';
import { MainBannerAdsController } from './main-banner-ads.controller';
import { MainBannerAdsService } from './main-banner-ads.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainBannerAd])], 
  controllers: [MainBannerAdsController],
  providers: [MainBannerAdsService]
})
export class MainBannerAdsModule {}
