import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreCategoriesModule } from './store-categories/store-categories.module';
import { MainBannerAdsModule } from './main-banner-ads/main-banner-ads.module';
import { StoreModule } from './store/store.module';
import { BusinessInfoModule } from './business-info/business-info.module';
import { StoreAdsModule } from './store-ads/store-ads.module';
import { NeededInfoModule } from './needed-info/needed-info.module';
import { AppSectionModule } from './app-section/app-section.module';
import { NewsModule } from './news/news.module';
import { FooterSectionsModule } from './footer-sections/footer-sections.module';
import { DiscountsModule } from './discounts/discounts.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    StoreCategoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sus_beneficios',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      //logging: true,
    }),
    MainBannerAdsModule,
    StoreModule,
    BusinessInfoModule,
    StoreAdsModule,
    NeededInfoModule,
    AppSectionModule,
    NewsModule,
    FooterSectionsModule,
    DiscountsModule,
    ProductModule,
  ],
  
})
export class AppModule {}
